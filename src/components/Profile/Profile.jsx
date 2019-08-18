import React from 'react';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div><img src="/images/pexels-photo.jpeg" alt=""/></div>
            <div>Avatar + description</div>
            <div>Messages</div>
            <MyPosts/>
        </div>
    );
}

export default Profile;