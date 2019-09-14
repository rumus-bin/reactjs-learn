import React from 'react';
import Post from "./Post";
import styles from './styles/MyPosts.module.css';

const MyPosts = (props) => {
    let postsData = props.store.getState().profilePage.posts.map((postItem, index) =>  <Post key={index} postData={postItem}/>);
    let addPostElement = React.createRef();
    let defaultPostText = props.store.getState().profilePage.newPostText;

    let addPost = () => {
        props.store.addPost()
    }

    let setPostText = (event) => {
        props.store.updatePostText(addPostElement.current.value);
    }

    return (
        <div className={styles.posts}>
            <div className={styles.addPostBlock}>
                <div className={styles.addPostBlockArea}>
                    <textarea
                        ref={addPostElement}
                        cols="30" rows="5"
                        onChange={setPostText}
                        value={defaultPostText} />
                </div>

                <button onClick={addPost}>Add post</button>
            </div>
            {postsData}
        </div>
    )
};

export default MyPosts;