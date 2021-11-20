import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postMessage = props.posts.map((p) => {
		return <Post message={p.post} count={p.likesCount}/>;
	});

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	};

	return (
		<div className={s.myPosts}>
			<h3>My posts</h3>
			<div className={s.newPost}>
				<div>
					<textarea cols='30' rows='5' ref={newPostElement}></textarea>
				</div>
				<div>
					<button onClick={addPost}>add post
					</button>
				</div>
			</div>
			<div>
				{postMessage}
			</div>
		</div>
	);
};

export default MyPosts;