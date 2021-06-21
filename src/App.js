import React from "react";
import './App.css';
import logo from "./images/wolf_logo.png";
import sand from "./images/sand.jpg"


const App = () => {
  return (
    
        <div className="app-wrapper">
          <header className="header">
            <div>
            < img src={logo} alt="logo" />
            </div>
          </header>
          <nav className="nav">
            <div>Profile</div>
            <div>Message</div>
            <div>News</div>
            <div>Music</div>
            <div>Settings</div>
          </nav>
          <div className="content">
            <div>
              <img src={sand} alt="island" />
            </div>
            <div>ava+description</div>
            <div>
              My posts
              <div>New post</div>
              <div>
                <div>post 1</div>
                <div>post 2</div>
              </div>
            </div>
          </div>
        </div>
  );
}


export default App;
