import React from 'react';
import Nav from './modules/Nav/pages/navs';
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <Nav />
      </body>
    </div>
  );
}

export default App;
