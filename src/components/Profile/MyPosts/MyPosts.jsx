import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

	let postData = [
		{id: 1, post: 'Hey, why nobody love me?', likesCount: 15},
		{id: 2, post: 'It\'s my first message', likesCount: 20},
		{id: 3, post: 'Do you like this?', likesCount: 3},
		{id: 4, post: 'Yo', likesCount: 3}
	];

	let postMessage = postData.map((post) => {
		return <Post message={post.post} count={post.likesCount}/>;
	});

	return (
		<div className={s.myPosts}>
			<h3>My posts</h3>
			<div className={s.newPost}>
				<div><textarea cols='30' rows='5'></textarea></div>
				<div>
					<button>add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postMessage}
			</div>
		</div>
	);
};

export default MyPosts;