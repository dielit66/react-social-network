import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import { addNewPost } from "./redux/state";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          component={() => (
            <Dialogs
              dialogsData={props.state.dialogsPage.dialogsData}
              messagesData={props.state.dialogsPage.messagesData}
            />
          )}
        />
        <Route
          path="/profile"
          component={() => (
            <Profile
              postData={props.state.profilePage.postData}
              addNewPost={props.addNewPost}
            />
          )}
        />
      </div>
    </div>
  );
}

export default App;
