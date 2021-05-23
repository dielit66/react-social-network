import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          component={() => <Dialogs store={props.store} />}
        />
        <Route
          path="/profile"
          component={() => (
            <Profile
              postData={props.state.profilePage.postData}
              dispatch={props.dispatch}
            />
          )}
        />
      </div>
    </div>
  );
}

export default App;
