function Test() {
  return <div style={{ backgroundColor: "#ff0000" }}>Test component</div>;
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(React.createElement(Test), domContainer);
