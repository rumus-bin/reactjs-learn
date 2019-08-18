import React from 'react';
// import logo from "../../logo.svg";

const Header = (props) => {
    return (
        <header className="header">
            <img src={props.logo} className="App-logo" alt="logo" />
        </header>

    );
};

export default Header;