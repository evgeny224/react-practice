import React from "react";
import './../App.css';
import logo from "./../images/wolf_logo.png";

const Header = () => {
    return(
        <header className="header">
            <div>
                < img src={logo} alt="logo" />
            </div>
        </header>
    )
}

export default Header;