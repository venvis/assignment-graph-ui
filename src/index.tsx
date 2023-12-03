import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="body">
    <App />
   <div className="right">
    <div className="area">
      <br></br>
      <p id="p"></p>
      
    </div>
   <div className="buttons">
    <h1 id="initial" placeholder="Enter Name to be changed" contentEditable="true">ENter node name</h1>
    <h1  id="final" placeholder="Enter Name to change into" contentEditable="true">Enter name to be changed into</h1>
    
    <button id="one">Change</button>
    
      </div>
      <div className="search">
      <input type="text" id="filterInput" placeholder="Search node name..." />
<div id="filteredNodes"></div>

      </div>
    </div>
   </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
