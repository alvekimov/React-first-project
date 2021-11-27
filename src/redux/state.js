import {observe} from 'web-vitals/dist/modules/lib/observe';

let state = {
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
};

let rerenderEntireTree = () => {

};

export const addPost = () => {

	let newPost = {
		id: 5,
		post: state.profilePage.newPostText,
		likesCount: 0
	};

	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {

	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
};

export const addMessage = () => {

	let newMessage = {
		id: 5,
		message: state.dialogsPage.newMessageText,
	};

	state.dialogsPage.messages.push(newMessage);
	state.dialogsPage.newMessageText = '';
	rerenderEntireTree(state);
};

export const updateNewMessageText = (newText) => {

	state.dialogsPage.newMessageText = newText;
	rerenderEntireTree(state);
};

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
};

export default state;