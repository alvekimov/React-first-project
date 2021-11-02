import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
// import Profile from './components/Profile/Profile';
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                {/*<Profile />*/}
                <Dialogs/>
            </div>
        </div>
    );
}

export default App;
