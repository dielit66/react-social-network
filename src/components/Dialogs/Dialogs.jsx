import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={styles.dialogItem + " " + styles.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={styles.message}>{props.text}</div>;
};

const Dialogs = () => {
  return (
    <div className={styles.content}>
      <div className={styles.dialogs}>
        <DialogItem name={"Elon"} id={"1"} />
        <DialogItem name={"Volodya"} id={"2"} />
        <DialogItem name={"Lisiy"} id={"3"} />
        <DialogItem name={"Drake"} id={"4"} />
        <DialogItem name={"Taylor"} id={"5"} />
        <DialogItem name={"Kanye"} id={"6"} />
      </div>
      <div className={styles.messages}>
        <Message text={"Hey!"} />
        <Message text={"How're you?"} />
        <Message text={"XD"} />
      </div>
    </div>
  );
};
export default Dialogs;
