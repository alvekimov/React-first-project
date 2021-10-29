import React from 'react';
import s from './Post.module.css'

const Post = () => {
  return (
    <div className={`${s.item} + ${s.active}`}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqx0ksR_M4CeAJA6EGSxjFBW1Fzr_nTRxPcA&usqp=CAU" alt="cat" />
      Post 1
      <div><span>like</span></div>
    </div>
  );
}

export default Post