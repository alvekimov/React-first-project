import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

	let postData = [
		{id: 1, post: 'Hey, why nobody love me?', likesCount: 15},
		{id: 2, post: 'It\'s my first message', likesCount: 20},
		{id: 3, post: 'Do you like this?', likesCount: 3},
		{id: 4, post: 'Yo', likesCount: 3}
	];

	return (
		<main className={s.content}>
			<ProfileInfo/>
			<MyPosts postData={postData}/>
		</main>
	);
};

export default Profile;