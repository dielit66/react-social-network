import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/state";

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
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = state.messagesData.map((message) => (
    <Message text={message.text} id={message.id} />
  ));
  let newMessageText = state.newMessageText;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let text = e.target.value;
    props.store.dispatch(updateNewMessageTextCreator(text));
  };
  return (
    <div className={styles.content}>
      <div className={styles.dialogs}>{dialogsElements}</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageText}
              onChange={onNewMessageChange}
              placeholder="Enter your message here!"
            />
          </div>
          <div>
            <button onClick={onSendMessageClick}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
