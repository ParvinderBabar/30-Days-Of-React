import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Image from "./img/user.png";
import tech from "./img/technology.jpg";

import reportWebVitals from "./reportWebVitals";

const headerStyles = {
  backgroundColor: "#61DBFB",
  fontFamily: "Helvetica Neue",
  padding: 25,
  lineHeight: 1.5,
};
const author = "ashihs";
// JSX element, header
const header = (
  <header style={headerStyles}>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <h4>{author}</h4>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 2, 2020</small>
    </div>
  </header>
);
const user = (
  <div>
    <img src={Image} alt="img" />
    <img src={tech} alt="img2"></img>
  </div>
);
// JSX element, main
const mainStyles = {
  backgroundColor: "pink",
};
const main = (
  <main style={mainStyles}>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
);

const footerStyles = {
  backgroundColor: "#61DBFB",
};
// JSX element, footer
const footer = (
  <footer style={footerStyles}>
    <p>Copyright 2020</p>
  </footer>
);

// JSX element, app
const app = (
  <div className="app">
    {header}
    {main}
    {user}
    {footer}
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
