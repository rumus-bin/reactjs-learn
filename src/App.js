import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/News";


function App(props) {
    props.state.peopleName = "Ruslan";
    return (
        <div className="app-wrapper">
            <Header logo={logo}/>
            <Navbar/>
            <div className="main-content">
                <Route path="/profile" render={() => {
                    return (
                        <Profile addPost={props.addPost} posts={props.state.posts} peopleName={props.state.peopleName}/>
                    )
                }}/>
                <Route path="/dialogs" render={() => {
                    return (
                        <Dialogs dialogsData={props.state.dialogsPage}/>)
                }}/>
                <Route path="/music" component={Music}/>
                <Route path="/news" component={News}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
