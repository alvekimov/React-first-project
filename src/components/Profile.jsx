import React from 'react';

const Profile = () => {
  return (
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
  );
}

export default Profile;