import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <a href="/profile">
        <div className={classes.nav_item}>Profile</div>
      </a>
      <a href="/dialogs">
        <div className={classes.nav_item}>Messages</div>
      </a>
      <a href="#">
        <div className={classes.nav_item}>News</div>
      </a>
      <a href="#">
        <div className={classes.nav_item}>Music</div>
      </a>
      <a href="#">
        <div className={`${classes.nav_item} ${classes.nav_item__settings}`}>
          Settings
        </div>
      </a>
    </nav>
  );
};

export default Navbar;
