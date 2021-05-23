const ADD_POST = "ADD-POST";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";
let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hey! How re you?", likesCounter: 1 },
        { id: 2, message: "Hi! I'm fine?", likesCounter: 38 },
        { id: 3, message: "What's going on here?", likesCounter: 18 },
        { id: 4, message: "XD", likesCounter: 11 },
      ],
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Elon" },
        { id: 2, name: "Volodya" },
        { id: 3, name: "Lisiy" },
        { id: 4, name: "Drake" },
        { id: 5, name: "Taylor" },
        { id: 6, name: "Kanye" },
      ],
      messagesData: [
        { text: "Hey!", id: 1 },
        { text: "How're you?", id: 2 },
        { text: "XD", id: 3 },
      ],
      newMessageText: "",
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log("state has been changed");
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPostData = {
        id: 5,
        message: action.postText,
        likesCounter: 0,
      };
      this._state.profilePage.postData.push(newPostData);
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let text = this._state.dialogsPage.newMessageText;
      this._state.dialogsPage.newMessageText = "";
      this._state.dialogsPage.messagesData.push({ text: text, id: 4 });
      this._callSubscriber(this._state);
    }
  },
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: text,
});
export default store;
window.store = store;
