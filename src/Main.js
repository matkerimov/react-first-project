import React from "react";
import MainCard from "./Main-card";

function Main(){
    return (
        <div className="main">
            <div className="main-info">
                <h2 className="main-title">
                    Shop
                </h2>
                <p className="main-desk">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <MainCard />
        </div>
    )
}
export default Main