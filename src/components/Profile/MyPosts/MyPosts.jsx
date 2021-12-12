import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

	let postMessage = props.posts.map((p) => {
		return <Post message={p.post} count={p.likesCount}/>;
	});

	let newPostElement = React.createRef();

	let addPosts = () => {
		//props.addPost();
		props.dispatch(
			{type: 'ADD-POST'}
		);
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		//props.updateNewPostText(text);
		props.dispatch({
			type: 'UPDATE-NEW-POST-TEXT',
			newText: text
		});
	};

	return (
		<div className={s.myPosts}>
			<h3>My posts</h3>
			<div className={s.newPost}>
				<div>
					<textarea cols='100' rows='5' onChange={onPostChange} ref={newPostElement}
					          value={props.newPostText}/>
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