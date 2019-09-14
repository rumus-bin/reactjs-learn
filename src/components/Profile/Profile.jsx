import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo name={props.store.getState().profilePage.peopleName}/>
            <MyPosts store={props.store}/>
        </div>
    );
}

export default Profile;