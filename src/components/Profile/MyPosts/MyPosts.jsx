import React from 'react';
import Post from "./Post";
import styles from './MyPosts.module.css';

const MyPosts = (props) => {

  let posts = {
    first: {name: 'First name', content: 'First post content'},
    second: {name: 'Second name', content: 'Second post content'},
    third: {name: 'Third name', content: 'Third post content'}
  };

  return (
      <div className={styles.posts}>
         <Post postData={posts.first} />
        <Post postData={posts.second} />
        <Post postData={posts.third} />
      </div>
    )
};

export default MyPosts;