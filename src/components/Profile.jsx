import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
  return (
    <main className={s.content}>
      <div className={s.backImg}>
        <img src="https://sebweo.com/images/landshaft-bernskikh-alp-v-yasniy-den.jpg" alt="nature" />
      </div>
      <div className={s.avatarDescription}>
        <div className={s.avatar}>
          avatar
        </div>
        <div className={s.description}>
          description
        </div>
      </div>
      <div className={s.myPosts}>
        my-posts
        <div className={s.newPost}>
          new-post
        </div>
      </div>
      <div className={s.posts}>
        <div className={`${s.post} + ${s.active}`}>Post 1</div>
        <div className={`${s.post} + ${s.active}`}>Post 2</div>
        <div className={s.post}>Post 3</div>
      </div>
    </main>
  );
}

export default Profile;