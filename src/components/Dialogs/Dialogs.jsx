import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialog/DialogItem';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const Dialogs = (props) => {

	let dialogsElement = props.dialogs.map((d) => {
		return <DialogItem id={d.id} name={d.name}/>;
	});

	let messagesElement = props.messages.map((m) => {
		return <Message message={m.message}/>;
	});

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElement}
			</div>
			<div className={s.messages}>
				{messagesElement}
				<NewMessage />
			</div>
		</div>
	);
};

export default Dialogs;