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

let dialogsData = [
  { id: 1, name: "Elon" },
  { id: 2, name: "Volodya" },
  { id: 3, name: "Lisiy" },
  { id: 4, name: "Drake" },
  { id: 5, name: "Taylor" },
  { id: 6, name: "Kanye" },
];

const Dialogs = () => {
  return (
    <div className={styles.content}>
      <div className={styles.dialogs}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
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
