import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
	return (
		<main className={s.content}>
			<ProfileInfo name='Alex'
			             discription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem, beatae deserunt dicta doloremque
			dolorum facilis id magni, mollitia nam nemo nobis pariatur quasi quia quibusdam repudiandae sint suscipit
			velit!'/>
			<MyPosts/>
		</main>
	);
}

export default Profile;