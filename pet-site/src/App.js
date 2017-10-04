import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import header from './App';
import registerServiceWorker from './registerServiceWorker';

class header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

      </div>
    );
  }
}

ReactDOM.render(<header />, document.getElementById('navhead'));
registerServiceWorker();
