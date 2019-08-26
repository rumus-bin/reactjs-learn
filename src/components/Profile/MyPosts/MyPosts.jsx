import React from 'react';
import Post from "./Post";
import styles from './styles/MyPosts.module.css';

const MyPosts = (props) => {
    let postsData = props.profilePage.posts.map((postItem, index) =>  <Post key={index} postData={postItem}/>);
    let addPostElement = React.createRef();
    let defaultPostText = props.profilePage.newPostText;

    let addPost = () => {
        props.addPost()
    }

    let setPostText = (event) => {
        props.profilePage.updatePostText(addPostElement.current.value);
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