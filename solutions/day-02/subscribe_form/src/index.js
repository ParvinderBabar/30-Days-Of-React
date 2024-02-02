import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
const header = (
  <div className="header">
    <h3>SUBSCRIBE</h3>
  </div>
);

const appStyle = {
  backgroundColor: "skyblue",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: " 30vh",
  width: "100vh",
  margin: "30vh",
  border: "2px solid gray",
  borderRadius: "10px",
};
// const mainStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   padding: "5px",
//   margin: "10px",
// };
const inputStyle = {
  padding: "10px",
  margin: "5px", // Add padding to the inputs
  marginBottom: "15px", // Add margin between inputs
  borderRadius: "5px",
};
const buttonstyle = {
  display: "flex",
  backgroundColor: "red",
  color: "white",
  padding: "6px",
  borderRadius: "5px",
  marginTop: "15px",
  margin: "auto", // Center horizontally
};
const paraStyle = {
  display: "flex",
  margin: "auto",
  marginBottom: "20px",
  alignItems: "center",
  justifyContent: "center",
};
const main = (
  <form>
    <div>
      <p style={paraStyle}>
        sign up with your email address to get new and updates
      </p>

      <input type="text" placeholder="First Name" style={inputStyle} />

      <input type="text" placeholder="Last Name" style={inputStyle} />

      <input type="text" placeholder="Email" style={inputStyle} />
    </div>
    <div>
      <button style={buttonstyle}>Subscribe</button>
    </div>
  </form>
);

const app = (
  <app style={appStyle}>
    {header}

    {main}
  </app>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
