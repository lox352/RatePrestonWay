import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./Components/NavBar/NavBar.js";

const Index = () => {
return (
  <div>
<div>Hello React!</div>
<NavBar></NavBar>
</div>
);
};

ReactDOM.render(<Index />, document.getElementById("index"));
