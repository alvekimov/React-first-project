import {rerenderEntireTree} from '../render';

let state = {
	profilePage: {
		posts: [
			{id: 1, post: 'Hey, why nobody love me?', likesCount: 15},
			{id: 2, post: 'It\'s my first message', likesCount: 20},
			{id: 3, post: 'Do you like this?', likesCount: 3},
			{id: 4, post: 'Yo', likesCount: 3}
		],
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
	}
};

export let addPost = (postMessage) => {

	let newPost = {
		id: 5,
		post: postMessage,
		likesCount: 0
	};

	state.profilePage.posts.push(newPost);
	rerenderEntireTree(state);
};

export default state;