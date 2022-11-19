import React from 'react';
import ReactDOM from 'react-dom/client';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import SearchEngine from "./SearchEngine";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="App">
    <div>
      <h1>
        Hosted with
        <a href="https://www.netlify.com">Netlify</a>
      </h1>
    </div>
    <div>
      <SearchEngine />
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
