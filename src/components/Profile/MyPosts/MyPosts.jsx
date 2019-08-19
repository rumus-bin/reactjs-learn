import React from 'react';
import Post from "./Post";
import styles from './styles/MyPosts.module.css';

const MyPosts = (props) => {

    let posts = [
        {name: 'First name', content: 'First post content'},
        {name: 'Second name', content: 'Second post content'},
        {name: 'Third name', content: 'Third post content'}
    ];

    let postsData = posts.map(postItem =>  <Post postData={postItem}/>);

    return (
        <div className={styles.posts}>
            <div className={styles.addPostBlock}>
                <div className={styles.addPostBlockArea}>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>

                <button>Add post</button>
            </div>
            {postsData}
        </div>
    )
};

export default MyPosts;