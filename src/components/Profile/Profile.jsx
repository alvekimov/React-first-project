import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <main className={s.content}>
            <div className={s.backImg}>
                <img src="https://sebweo.com/images/landshaft-bernskikh-alp-v-yasniy-den.jpg" alt="nature"/>
            </div>
            <div className={s.avatarDescription}>
                <div className={s.avatar}>
                    avatar
                </div>
                <div className={s.description}>
                    description
                </div>
            </div>
            <MyPosts/>
        </main>
    );
}

export default Profile;