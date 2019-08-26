import React from 'react';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import {subscriber} from './redux/state';
import ReactDOM from "react-dom";
import App from "./App";
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App addPost={addPost} state={state}/>
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree();

subscriber(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
