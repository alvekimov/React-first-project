import React from 'react';
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<Dialog id='1' name='Alex'/>
				<Dialog id='2' name='Dima'/>
				<Dialog id='3' name='Sveta'/>
				<Dialog id='4' name='Kate'/>
				<Dialog id='5' name='Misha'/>
				<Dialog id='6' name='Petr'/>
				<Dialog id='7' name='Viktor'/>
				<Dialog id='8' name='Andrey'/>
			</div>
			<div className={s.messages}>
				<Message message='Hi'/>
				<Message message='How are you?'/>
				<Message message='Yo'/>
			</div>
		</div>
	);
}

export default Dialogs;