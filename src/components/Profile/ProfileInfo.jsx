import React from 'react';
import styles from './styles/ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
      <div>
          <div><img src="/images/pexels-photo.jpeg" alt=""/></div>
          <div className={styles.profileInfoContent}>
              <div>Avatar + description</div>
              <div>Messages</div>
          </div>
      </div>
  );
};

export default ProfileInfo;