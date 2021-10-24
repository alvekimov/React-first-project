import React from 'react';
import './index.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <a href="/"><img src='https://w1.pngwing.com/pngs/455/631/png-transparent-graphy-logo-bonfire-campfire-orange-symbol.png' width='40px' alt='logo'></img></a> happy word
      </header>
      <nav className='nav'>
        <ul>
          <li><a href='#a'>Profile</a></li>
          <li><a href='#b'>Message</a></li>
          <li><a href='#c'>News</a></li>
          <li><a href='#d'>Music</a></li>
          <li><a href='#e'>Settings</a></li>
        </ul>
      </nav>
      <main className='content'>
        <div className='back-img'>
          <img src="https://sebweo.com/images/landshaft-bernskikh-alp-v-yasniy-den.jpg" alt="nature" />
        </div>
        <div className='avatar-description'>
          <div className='avatar'>
            avatar
          </div>
          <div className='description'>
            description
          </div>
        </div>
        <div className='my-posts'>
          my-posts
          <div className="new-post">
            new-post
          </div>
        </div>
        <div className='posts'>
          <div className="post">Post 1</div>
          <div className="post">Post 2</div>
          <div className="post">Post 3</div>
        </div>
      </main>

    </div>

  );
}

export default App;
