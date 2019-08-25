import React from 'react';
import Post from "./Post";
import styles from './styles/MyPosts.module.css';

const MyPosts = (props) => {
    let postsData = props.posts.map((postItem, index) =>  <Post key={index} postData={postItem}/>);
    let addPostElement = React.createRef();

    let addPost = () => {
        let postText = addPostElement.current.value;
        console.log(postText)
    }

    return (
        <div className={styles.posts}>
            <div className={styles.addPostBlock}>
                <div className={styles.addPostBlockArea}>
                    <textarea ref={addPostElement} cols="30" rows="5" defaultValue="Hello"></textarea>
                </div>

                <button onClick={addPost}>Add post</button>
            </div>
            {postsData}
        </div>
    )
};

export default MyPosts;