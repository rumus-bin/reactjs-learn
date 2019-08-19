import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from "./Content/Message";

let dialogsData = [
    {name: "Dymych", id: 1},
    {name: "Petya", id: 2},
    {name: "Egor", id: 3},
    {name: "Sveta", id: 4},
];

let messageData = [
    {id: 1, message: "Hello world"},
    {id: 2, message: "I am"},
    {id: 3, message: "A message"},
    {id: 4, message: "Component"},
];

let dialogsItems = dialogsData.map(data => <DialogItem name={data.name} id={data.id} />);
let messageItems = messageData.map(messageData => <Message message={messageData.message} id={messageData.id} />);


let Dialogs = (props) => {
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