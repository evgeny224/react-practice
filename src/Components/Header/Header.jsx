import React from "react";
import style from "./Header.module.css";
import logo from "./../../images/wolf_logo.png";

const Header = () => {
    return(
        <header className={style.header} >
            <div>
                < img className={style.img}  src={logo} alt="logo" />
            </div>
        </header>
    )
}

export default Header;