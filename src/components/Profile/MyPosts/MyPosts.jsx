import React from 'react';
import Post from "./Post";
import styles from './styles/MyPosts.module.css';

const MyPosts = (props) => {
    let postsData = props.posts.map((postItem, index) =>  <Post key={index} postData={postItem}/>);

    return (
        <div className={styles.posts}>
            <div className={styles.addPostBlock}>
                <div className={styles.addPostBlockArea}>
                    <textarea name="" id="" cols="30" rows="5" defaultValue="Hello"></textarea>
                </div>

                <button>Add post</button>
            </div>
            {postsData}
        </div>
    )
};

export default MyPosts;