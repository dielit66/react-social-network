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
        { text: "How're you?", id: 1 },
        { text: "XD", id: 1 },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _rerenderEntireTree() {
    console.log("state has been changed");
  },
  addNewPost(postText) {
    debugger;
    let newPostData = {
      id: 5,
      message: postText,
      likesCounter: 0,
    };
    this._state.profilePage.postData.push(newPostData);
    this._rerenderEntireTree(this._state);
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
};

export default store;
window.store = store;
