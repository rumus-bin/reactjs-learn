import React from 'react';
import Post from "./Post";
import styles from './styles/MyPosts.module.css';

const MyPosts = (props) => {

    let posts = {
        first: {name: 'First name', content: 'First post content'},
        second: {name: 'Second name', content: 'Second post content'},
        third: {name: 'Third name', content: 'Third post content'}
    };

    return (
        <div className={styles.posts}>
            <div className={styles.addPostBlock}>
                <div className={styles.addPostBlockArea}>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>

                <button>Add post</button>
            </div>
            <Post postData={posts.first}/>
            <Post postData={posts.second}/>
            <Post postData={posts.third}/>
        </div>
    )
};

export default MyPosts;