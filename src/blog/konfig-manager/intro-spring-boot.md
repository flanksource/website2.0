---
Author: Saul Nachman & Moshe Immerman
Last updated: 23/07/2021
---

# Konfig Manager

<!-- markdownlint-disable MD036 -->
**Managing a Spring Boot configuration**
<!-- markdownlint-enable MD036 -->

The Konfig Manager is for platform engineers needing to manage overlapping configurations across applications and environments.

## Design principles

- **100% YAML** – `Konfigs` are valid YAML and IDE validation and autocomplete of k8s resources works as normal.
- **Simple** – Easy to use and quick to get started.
- **Reconciliation based** – Changes are applied quickly and resiliently (unlike webhooks) at runtime.

## Installation

### Prerequisites

This guide assumes you have either a [kind cluster](https://kind.sigs.k8s.io/docs/user/quick-start/) or [minikube cluster](https://minikube.sigs.k8s.io/docs/start/) running, or have some other way of interacting with a cluster via [kubectl](https://kubernetes.io/docs/tasks/tools/).

To test the deployment in browser, set up ingress to your cluster – see, for example, the [minikube](https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/#create-an-ingress-resource) or [kind](https://kind.sigs.k8s.io/docs/user/ingress) docs.

### Install

```bash
export VERSION=0.10.0
# For the latest release version: https://github.com/flanksource/konfig-manager/releases

# Apply the operator
kubectl apply -f https://github.com/flanksource/konfig-manager/releases/download/v${VERSION}/operator.yml
```

### Following the logs

To follow the konfig-manager logs, open a new terminal and, changing what needs to be changed, run:

```bash
kubectl logs -f --since 10m -n konfig-manager konfig-manager-d54f64588-hjq5z konfig-manager
```

These logs are where reconciliation successes and errors show up – and the best place to look when debugging.

## Use case: Externalising a Spring Boot configuration

*As a platform engineer, I need to manage overlapping configurations across multiple applications and environments, so that applications are easy to promote.*

The Java Spring Boot project [recommends developers externalise their configuration](https://docs.spring.io/spring-boot/docs/1.0.1.RELEASE/reference/html/boot-features-external-config.html) and one method it provides is the `application.properties` file.

The Konfig Manager makes it easy to convert a set of `ConfigMaps` and `Secrets` to a single output  – the `application.properties` file – providing a single configuration to the container file system.

The `Konfig` type allows developers to specify a `hierarchy` (defining merge inclusion and precedence) and an `output` field (defining output structure).

### Step 1: Apply a konfig

```yaml
cat <<EOF | kubectl apply -f -
kind: Namespace
apiVersion: v1
metadata:
  name: konfig-manager-tutorial
---
apiVersion: konfigmanager.flanksource.com/v1
kind: Konfig
metadata:
  name: konfig-manager-tutorial
  namespace: konfig-manager-tutorial
  labels:
    app: konfig-manager-tutorial
spec:
  # Items with matching names, namespaces and kinds will be scraped.
  # Values discovered in objects at the top of the hierarchy will be overwritten 
  # by values found lower down, but will be preserved otherwise.
  hierarchy:
      # The name of the object to be scraped
    - name: global
      # The kind of the object to be scraped
      kind: ConfigMap
      # The namespace of the object to be scraped
      namespace: konfig-manager-tutorial
    - name: global
      kind: Secret
      namespace: konfig-manager-tutorial
    - name: environment
      kind: ConfigMap
      namespace: konfig-manager-tutorial
    - name: environment
      kind: Secret
      namespace: konfig-manager-tutorial
    - name: konfig-manager-tutorial
      kind: Secret
      namespace: konfig-manager-tutorial
    - name: konfig-manager-tutorial
      kind: ConfigMap
      namespace: konfig-manager-tutorial
      # Causes value at the key to be treated as the data to recover.
      key: application.properties
      # Set parsing for value recovered from "key" to $KEY=$VALUE
      type: properties
  output:
    # Name of output object  
    name: konfig-manager-tutorial-application-properties 
    # Namespace of output object
    namespace: konfig-manager-tutorial 
    # Secret or ConfigMap
    kind: ConfigMap 
    # Adds values as multiline text. Must be present for "key" value to be set.
    type: file 
    # Sets output format to $KEY=$VALUE
    filetype: env 
    # Adds multiline text to a key with this value.
    key: application.properties 
EOF
```

### Step 2: Apply configmaps and secrets

So the Konfig Manager has something to scrape, apply the following, noting that the names match those in the hierarchy:

```yaml
cat <<'EOF' | kubectl apply -f -
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: konfig-manager-tutorial
  # The Konfig Manager will scrape values sets by name and
  # merge them by the precedence in the hierarchy.
  # When a variable appears multiple times, the last declared
  # value of the variable wins.
  name: global
data:
  # The variables below are rendered in application.properties in standard Spring Boot fashion:
  # See: https://docs.spring.io/spring-boot/docs/1.0.1.RELEASE/reference/html/boot-features-external-config.html#boot-features-external-config-placeholders-in-properties
  variableOne: globalValueOne
  variableTwo: ${variableOne}-globalValueTwo
  variableThree: ${variableTwo}-globalValueThree
  variableFour: ${variableThree}-globalValueFour
---
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: konfig-manager-tutorial
  name: environment
data:
  variableOne: environmentValueOne
  variableThree: ${variableTwo}-environmentValueThree
  variableFour: ${variableThree}-environmentValueFour
---
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: konfig-manager-tutorial
  name: konfig-manager-tutorial
data:
  # Note the hierarchy node for name "konfig-manager-tutorial".
  # That node provides the key to unwrap and the string type
  # expected.
  #
  # This can be useful for existing "application.properties" files.
  application.properties: |
    variableFour=${variableThree}-applicationValueFour 
---
apiVersion: v1
kind: Secret
metadata:
  namespace: konfig-manager-tutorial
  name: global
type: Opaque
data:
  # base64 values will be decoded
  USER_NAME: YWRtaW4=
  PASSWORD: MWYyZDFlMmU2N2Rm
---
apiVersion: v1
kind: Secret
metadata:
  namespace: konfig-manager-tutorial
  name: environment
type: Opaque
data:
  PASSWORD: MWYyZDFlMmU2N2Rm
---
apiVersion: v1
kind: Secret
metadata:
  namespace: konfig-manager-tutorial
  name: konfig-manager-tutorial
type: Opaque
data:
  PASSWORD: dGhpc2lzYXBhc3N3b3Jk
EOF
```

### Step 3: Examining the output

After the Konfig Manager reconciles (see [following the logs](#Following-the-logs)), run:

```bash
kubectl get configmaps -n konfig-manager-tutorial konfig-manager-tutorial-application-properties -o yaml
```

You will see an object similar to the below:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: konfig-manager-tutorial-application-properties
  namespace: konfig-manager-tutorial
data:
  application.properties: "#\n# ConfigMap/global\n#\nvariableTwo=${variableOne}-globalValueTwo\n#\n#
    Secret/global\n#\nUSER_NAME=admin\n#\n# ConfigMap/environment\n#\nvariableOne=environmentValueOne\nvariableThree=${variableTwo}-environmentValueThree\n#\n#
    Secret/konfig-manager-tutorial\n#\nPASSWORD=thisisapassword\n#\n# ConfigMap/konfig-manager-tutorial[application.properties]\n#\nvariableFour=${variableThree}-applicationValueFour
    \n"
```

Notice in each case that the last declared variable is preserved and that each variable group is accompanied by the name of the object which provided it.

### Step 4: Add an ingress, service and a Spring Boot deployment

Provide an application to consume `konfig-manager-tutorial-application-properties` by applying the following:

```yaml
cat <<EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: konfig-manager-tutorial
  namespace: konfig-manager-tutorial
  labels:
    app: konfig-manager-tutorial
spec:
  replicas: 2
  selector:
    matchLabels:
      app: konfig-manager-tutorial
  template:
    metadata:
      labels:
        app: konfig-manager-tutorial
    spec:
      volumes:
      # This volume is referenced at the volumeMount by name
      - name: application-properties
        # The key "application.properties" on ConfigMap
        # "konfig-manager-tutorial-application-properties" is included.
        configMap:
          name: konfig-manager-tutorial-application-properties
          optional: true
          items:
            - key: application.properties
              path: application.properties
      containers:
        - name: konfig-manager-tutorial
          image: flanksource/konfig-manager-tutorial:0.0.1
          imagePullPolicy: Always
          env:
            # This container uses the standard build pack which provides the 
            # JAVA_TOOL_OPTIONS variable: https://paketo.io/docs/howto/java/
            #
            # In this case, it is leveraged to provide a location for the 
            # injected "application.properties" file.
            - name: JAVA_TOOL_OPTIONS
              value: -Dspring.config.location=/deployments/config/application.properties
          volumeMounts:
            - mountPath: /deployments/config
              name: application-properties
          ports:
            - containerPort: 8080
              protocol: TCP
---
apiVersion: v1
kind: Service
metadata:
  name: konfig-manager-tutorial
  namespace: konfig-manager-tutorial
spec:
  selector:
    app: konfig-manager-tutorial
  ports:
    - port: 8080
      targetPort: 8080
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    kubernetes.io/tls-acme: "true"
  name: konfig-manager-tutorial
  namespace: konfig-manager-tutorial
  labels:
    app: konfig-manager-tutorial
spec:
  rules:
  - host: konfig-manager-tutorial.test
    http:
      paths:
        - pathType: Prefix
          path: /
          backend:
            service:
              name: konfig-manager-tutorial
              port:
                number: 8080
  tls:
    - hosts:
        - konfig-manager-tutorial.test
      secretName: konfig-manager-tutorial-tls
EOF
```

### Step 5: See results

If you have set up an ingress, go to <https://konfig-manager-tutorial.test>.

> **Tip:** If you applied the deployment before the configmap `konfig-manager-tutorial-application-properties` had been created, run:
>
> ```bash
>  kubectl rollout restart -n konfig-manager-tutorial deployment konfig-manager-tutorial
> ```

You should see the following on screen:

```text
Variables:
   - variableOne:   environmentValueOne
   - variableTwo:   environmentValueOne-globalValueTwo
   - variableThree: environmentValueOne-globalValueTwo-environmentValueThree
   - variableFour:  environmentValueOne-globalValueTwo-environmentValueThree-applicationValueFour
```
