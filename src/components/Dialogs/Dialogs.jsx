import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from "./Content/Message";


let Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
               <DialogItem name="Petya" id="1" />
               <DialogItem name="Vasya" id="2" />
               <DialogItem name="Kolya" id="3" />
               <DialogItem name="Sveta" id="4" />
            </div>
            <div className={styles.messages}>
                <Message message="Hello world"/>
                <Message message="I am"/>
                <Message message="A message"/>
                <Message message="Component"/>
            </div>

        </div>
    );
};

export default Dialogs;