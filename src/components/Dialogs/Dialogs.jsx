import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialog/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

	let dialogsElement = props.dialogs.map((d) => {
		return <DialogItem id={d.id} name={d.name}/>;
	});

	let messagesElement = props.messages.map((m) => {
		return <Message message={m.message}/>;
	});

	let newMessageElement = React.createRef();

	let addMessages = () => {
		props.addMessage();
	};

	let onMessageChange = () => {
		let text = newMessageElement.current.value;
		props.updateNewMessageText(text);
	};

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElement}
			</div>
			<div className={s.messages}>
				{messagesElement}
				<div>
					<textarea cols='100' rows='5'
					          ref={newMessageElement}
					          value={props.newMessageText}
					          onChange={onMessageChange}
					/>
				</div>
				<div>
					<button onClick={addMessages}>add new message</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;