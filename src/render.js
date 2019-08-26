import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App addPost={addPost} state={state}/>
        </BrowserRouter>, document.getElementById('root'));
};