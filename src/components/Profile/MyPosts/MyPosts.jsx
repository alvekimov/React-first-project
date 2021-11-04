import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={s.myPosts}>
			<h3>My posts</h3>
			<div className={s.newPost}>
				<div><textarea cols='30' rows='5'></textarea></div>
				<div><button>add post</button></div>
			</div>
			<div className={s.posts}>
				<Post message='Hey, why nobody love me?' count='15'/>
				<Post message="It's my first message" count='20'/>
				<Post message='Do you like this?' count='3'/>
			</div>
		</div>
	);
}

export default MyPosts;