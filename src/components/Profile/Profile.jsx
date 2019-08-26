import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo name={props.profilePage.peopleName}/>
            <MyPosts addPost={props.addPost} profilePage={props.profilePage}/>
        </div>
    );
}

export default Profile;