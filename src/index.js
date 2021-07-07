import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postsData = [   
  {id: 1, message:"Hello World!", likes: 4},
  {id: 2, message:"It is my favorite day.", likes: 1},
  {id: 3, message:"I am glad to see you.", likes: 2},
  {id: 4, message:"Me too!", likes: 5},
  {id: 5, message:"How knows that man?", likes: 6},

]

let DialogsData = [ 
  {id: 1, name: "Eva"},
  {id: 2, name: "Olga"},
  {id: 3, name: "Nick"},
  {id: 4, name: "Petr"},
  {id: 5, name: "Kir"},
  {id: 6, name: "Alex"},
]

let MessageData = [     
      {id: 1, message: "Hello every one!"},
      {id: 2, message: "Hi"},
      {id: 3, message: "Nice to meet you!"},
      {id: 4, message: "Thank you very mutch!"},
]


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} DialogsData={DialogsData} MessageData={MessageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
