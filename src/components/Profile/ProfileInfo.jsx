import React from 'react';
import styles from './styles/ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
      <div>
          <div className={styles.imgInner}><img src="/images/pexels-photo.jpeg" alt=""/></div>
          <div className={styles.profileInfoContent}>
              <h2>{props.name}  <small>profile</small></h2>

              <div>Avatar + description</div>
              <div>Messages</div>
          </div>
      </div>
  );
};

export default ProfileInfo;