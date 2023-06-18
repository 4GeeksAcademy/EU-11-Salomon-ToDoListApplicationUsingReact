//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import AnyComponent from "./component/todolist.jsx";


ReactDOM.render(
  <AnyComponent />,
  document.getElementById('app')
);