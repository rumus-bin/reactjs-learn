import React from 'react';
import styles from "./styles/Post.module.css"


const Posts = (props) => {
    return (
        <div className={styles.item}>
            <img src="" alt=""/>
            <div>
                <div>{props.postData.name}</div>
                <div>{props.postData.content}</div>
            </div>
        </div>
    );
};

export default Posts;
