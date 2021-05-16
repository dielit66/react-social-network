import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <NavLink to="/profile" activeClassName={classes.active}>
        <div className={classes.nav_item}>Profile</div>
      </NavLink>
      <NavLink to="/dialogs" activeClassName={classes.active}>
        <div className={classes.nav_item}>Messages</div>
      </NavLink>
      <NavLink to="#" activeClassName={classes.active}>
        <div className={classes.nav_item}>News</div>
      </NavLink>
      <NavLink to="#" activeClassName={classes.active}>
        <div className={classes.nav_item}>Music</div>
      </NavLink>
      <NavLink to="#" activeClassName={classes.active}>
        <div className={`${classes.nav_item} ${classes.nav_item__settings}`}>
          Settings
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
