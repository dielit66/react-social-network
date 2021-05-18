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
  let newMessageElement = React.createRef();
  let sendMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.messagesData.map((message) => (
    <Message text={message.text} id={message.id} />
  ));

  return (
    <div className={styles.content}>
      <div className={styles.dialogs}>{dialogsElements}</div>
      <div className={styles.messages}>
        {messagesElements}
        <textarea ref={newMessageElement}></textarea>
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
};
export default Dialogs;
