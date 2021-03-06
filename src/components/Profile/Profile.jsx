import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<main className={s.content}>
			<ProfileInfo/>
			<MyPosts posts={props.posts}
			         newPostText={props.newPostText}
			         dispatch={props.dispatch}
			/>
		</main>
	);
};

export default Profile;