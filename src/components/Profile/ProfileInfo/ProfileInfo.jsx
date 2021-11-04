import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
	return (
		<div className={s.profileInfo}>
			<div className={s.backImg}>
				<img src='https://sebweo.com/images/landshaft-bernskikh-alp-v-yasniy-den.jpg' alt='nature'/>
			</div>
			<div className={s.container}>
				<a>
					<div className={s.circle}><img src={'./img/' + props.id} alt=''/></div>
					<div className={s.name}>{props.name}</div>
				</a>
				<div>{props.discription}</div>
			</div>
		</div>

	)
		;
}

export default ProfileInfo;