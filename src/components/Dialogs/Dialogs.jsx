import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from "./Content/Message";

let Dialogs = (props) => {

    let dialogsItems = props.dialogsData.dialogItems.map((data, key) => {
        return <DialogItem key={key} name={data.name} id={data.id} />
    });
    let messageItems =  props.dialogsData.dialogMessages.map((messageData, key) => {
        return <Message key={key} message={messageData.message} id={messageData.id} />
    });

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsItems}
            </div>
            <div className={styles.messages}>
                {messageItems}
            </div>
        </div>
    );
};

export default Dialogs;