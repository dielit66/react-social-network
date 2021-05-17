import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let postData = [
  { id: 1, message: "Hey! How re you?", likesCounter: 1 },
  { id: 2, message: "Hi! I'm fine?", likesCounter: 38 },
  { id: 3, message: "What's going on here?", likesCounter: 18 },
  { id: 4, message: "XD", likesCounter: 11 },
];

let dialogsData = [
  { id: 1, name: "Elon" },
  { id: 2, name: "Volodya" },
  { id: 3, name: "Lisiy" },
  { id: 4, name: "Drake" },
  { id: 5, name: "Taylor" },
  { id: 6, name: "Kanye" },
];

let messagesData = [
  { text: "Hey!", id: 1 },
  { text: "How're you?", id: 1 },
  { text: "XD", id: 1 },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      postData={postData}
      dialogsData={dialogsData}
      messagesData={messagesData}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
