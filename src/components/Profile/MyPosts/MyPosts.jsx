import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

	let postMessage = props.posts.map((p) => {
		return <Post message={p.post} count={p.likesCount}/>;
	});

	let newPostElement = React.createRef();

	let addPosts = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
		newPostElement.current.value = '';
	};

	return (
		<div className={s.myPosts}>
			<h3>My posts</h3>
			<div className={s.newPost}>
				<div>
					<textarea cols='100' rows='5' ref={newPostElement}></textarea>
				</div>
				<div>
					<button onClick={addPosts}>add post</button>
				</div>
			</div>
			<div>
				{postMessage}
			</div>
		</div>
	);
};

export default MyPosts;