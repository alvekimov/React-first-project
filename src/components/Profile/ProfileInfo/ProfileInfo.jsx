import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return (
		<div className={s.profileInfo}>
			<div className={s.backImg}>
				<img src='https://sebweo.com/images/landshaft-bernskikh-alp-v-yasniy-den.jpg' alt='nature'/>
			</div>
			<div className={s.container}>
				avatar + discription
			</div>
		</div>
	);
};

export default ProfileInfo;