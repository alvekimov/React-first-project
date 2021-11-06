import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialog/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogs = [
		{id: 1, name: 'Alex'},
		{id: 2, name: 'Dima'},
		{id: 3, name: 'Sveta'},
		{id: 4, name: 'Kate'},
		{id: 5, name: 'Misha'},
		{id: 6, name: 'Petr'},
		{id: 7, name: 'Viktor'},
		{id: 8, name: 'Andrey'}
	];

	let dialogsElement = dialogs.map((dialog) => {
		return <DialogItem id={dialog.id} name={dialog.name}/>;
	});

	let messages = [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'How are you?'},
		{id: 3, message: 'Yo'},
		{id: 4, message: 'Yo'}
	];

	let messagesElement = messages.map((message) => {
		return <Message message={message.message}/>;
	});

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElement}
			</div>
			<div className={s.messages}>
				{messagesElement}
			</div>
		</div>
	);
};

export default Dialogs;