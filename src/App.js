import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";



const App = (props) => {



  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path='/dialogs' render={ () => <Dialogs Dialog={props.DialogsData}  Message={props.MessageData}/> }/>
            <Route path='/profile'  render={ () => <Profile postsData={props.postsData}/> }/>
            <Route path='/news'  render={ () => <News/> }/>
            <Route path='/music'  render={ () => <Music/> }/>
            <Route path='/settings'  render={ () => <Settings/> }/>
          </div>
        </div>
        </BrowserRouter>
  );
}


export default App;
