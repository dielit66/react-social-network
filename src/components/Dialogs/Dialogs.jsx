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

const Dialogs = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.dialogs}>
        <DialogItem
          name={props.dialogsData[0].name}
          id={props.dialogsData[0].id}
        />
        <DialogItem
          name={props.dialogsData[1].name}
          id={props.dialogsData[1].id}
        />
        <DialogItem
          name={props.dialogsData[2].name}
          id={props.dialogsData[2].id}
        />
        <DialogItem
          name={props.dialogsData[3].name}
          id={props.dialogsData[3].id}
        />
        <DialogItem
          name={props.dialogsData[4].name}
          id={props.dialogsData[4].id}
        />
        <DialogItem
          name={props.dialogsData[5].name}
          id={props.dialogsData[5].id}
        />
      </div>
      <div className={styles.messages}>
        <Message
          text={props.messagesData[0].text}
          id={props.messagesData[0].id}
        />
        <Message
          text={props.messagesData[1].text}
          id={props.messagesData[1].id}
        />
        <Message
          text={props.messagesData[2].text}
          id={props.messagesData[2].id}
        />
      </div>
    </div>
  );
};
export default Dialogs;
