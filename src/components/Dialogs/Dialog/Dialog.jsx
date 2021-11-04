import React from 'react';
import s from './Dialog.module.css'
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {
	return (
		<div className={s.dialogItem}>
			<NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
				<div className={s.circle}><img src={'./img/' + props.id} alt=''/></div>
				<div className={s.name}>{props.name}</div>
			</NavLink>
		</div>
	);
}

export default Dialog;