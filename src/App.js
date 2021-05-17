import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            component={() => (
              <Dialogs
                dialogsData={props.dialogsData}
                messagesData={props.messagesData}
              />
            )}
          />
          <Route
            path="/profile"
            component={() => <Profile postData={props.postData} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
