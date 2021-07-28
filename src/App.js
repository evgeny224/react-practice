import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = (props) => {

  debugger;

  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Navbar state={props.appState.sidebarPage} />
          <div className="app-wrapper-content">
            <Route path='/dialogs' render={ () => <DialogsContainer store = {props.store} /> }/>
            <Route path='/profile'  render={ () => <Profile store = {props.store} /> }/>
            <Route path='/news'  render={ () => <News/> }/>
            <Route path='/music'  render={ () => <Music/> }/>
            <Route path='/settings'  render={ () => <Settings/> }/>
          </div>
        </div>
        </BrowserRouter>
  );
}


export default App;
