let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, post: 'Hey, why nobody love me?', likesCount: 15},
				{id: 2, post: 'It\'s my first message', likesCount: 20},
				{id: 3, post: 'Do you like this?', likesCount: 3},
				{id: 4, post: 'Yo', likesCount: 3}
			],
			newPostText: 'newPostText from state',
		},
		dialogsPage: {
			dialogs: [
				{id: 1, name: 'Alex'},
				{id: 2, name: 'Dima'},
				{id: 3, name: 'Sveta'},
				{id: 4, name: 'Kate'},
				{id: 5, name: 'Misha'},
				{id: 6, name: 'Petr'},
				{id: 7, name: 'Viktor'},
				{id: 8, name: 'Andrey'}
			],
			messages: [
				{id: 1, message: 'Hi'},
				{id: 2, message: 'How are you?'},
				{id: 3, message: 'Yo'},
				{id: 4, message: 'Yo'}
			],
			newMessageText: 'newMessageText from state',
		}
	},
	getState(){
		return this._state
	},
	_callSubscriber() {
		console.log('ready')
	},
	addPost() {

		let newPost = {
			id: 5,
			post: this._state.profilePage.newPostText,
			likesCount: 0
		};

		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	updateNewPostText(newText) {

		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	addMessage() {

		let newMessage = {
			id: 5,
			message: this._state.dialogsPage.newMessageText,
		};

		this._state.dialogsPage.messages.push(newMessage);
		this._state.dialogsPage.newMessageText = '';
		this._callSubscriber(this._state);
	},
	updateNewMessageText(newText) {

		this._state.dialogsPage.newMessageText = newText;
		this._callSubscriber(this._state);
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	}
};


export default store;
window.store = store;