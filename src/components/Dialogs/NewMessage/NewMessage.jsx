import React from 'react';
import s from './NewMessage.module.css';

const NewMessage = (props) => {

	let newMessageElement = React.createRef();
	let addMessage = () => {
		let text = newMessageElement.current.value;
		alert(text);
	};

	return (
		<div>
			<div>
				<textarea cols='100' rows='5' ref={newMessageElement}></textarea>
			</div>
			<div className={s.newMessage}>
				<button onClick={addMessage}>add new message</button>
			</div>
		</div>
	);
};

export default NewMessage;