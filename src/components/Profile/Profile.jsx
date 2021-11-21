import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<main className={s.content}>
			<ProfileInfo/>
			<MyPosts posts={props.posts}
			         addPost={props.addPost}
			         newPostText={props.newPostText}
			         updateNewPostText={props.updateNewPostText}
			/>
		</main>
	);
};

export default Profile;