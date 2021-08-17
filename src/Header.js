import React from "react";
import HeaderLogo from "./Header-logo";
import HeaderNavBar from "./Header-nav-bar";

function Header(){
    return(
        <div className="header">
        <div className="container">
            <div className="navbar">
            <HeaderLogo />
            <HeaderNavBar />
            </div>
        </div>
        </div>
    )
}

export default Header