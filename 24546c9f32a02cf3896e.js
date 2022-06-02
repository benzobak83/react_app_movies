import React from "react";
import ReactDOM from "react-dom";
import { App } from './App.jsx';
import '../assets/css/main.css';
import '../assets/scss/main.scss';
import { Search } from './components/Search.jsx';
document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#root"));
});