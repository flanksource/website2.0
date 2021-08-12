import ada from '../../assets/images/customers/ada.png'
import discovery from '../../assets/images/customers/discovery.svg'
import bcb from '../../assets/images/customers/bcb.png'
import om from '../../assets/images/customers/old-mutual.png'
import LogoCloud from "../../components/LogoCloud";

export default function Customers(params) {
  return (
    <LogoCloud
      title="Happy Teams"
      srcList={[
        {
          src: ada,

        },
        {
          src: discovery,

        },
        {
          src: bcb
        },
        {
          src: om
        },

      ]}
      className={"py-20 bg-gray-50 filter grayscale"}
    />
  )


}
