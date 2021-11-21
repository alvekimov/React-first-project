import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header/>
			<NavBar/>
			<div className='app-wrapper-content'>
				<Route /*{exact}*/ path='/dialogs'>
					<Dialogs dialogs={props.state.dialogsPage.dialogs}
					         messages={props.state.dialogsPage.messages}
					         newMessageText={props.state.dialogsPage.newMessageText}
					         addMessage={props.addMessage}
					         updateNewMessageText={props.updateNewMessageText}

					/>
				</Route>
				<Route /*{exact}*/ path='/profile'>
					<Profile posts={props.state.profilePage.posts}
					         addPost={props.addPost}
							 newPostText={props.state.profilePage.newPostText}
							 updateNewPostText={props.updateNewPostText}
					/>
				</Route>
				<Route /*{exact}*/ path='/news'>
					<News/>
				</Route>
				<Route /*{exact}*/ path='/music'>
					<Music/>
				</Route>
				<Route /*{exact}*/ path='/settings'>
					<Settings/>
				</Route>
			</div>
		</div>
	);
};

export default App;


//<Route /*{exact}*/ path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
// <Route /*{exact}*/ path='/profile' render={() => <Profile postData={props.postData}/>}/>