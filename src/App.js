import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Android">
          <div className="head"/>

          <div className="bodywrap">
          
            <div className="realbodywrap">
              <div className="arm leftarm"/>
              <div className="body">
                <div className="neck"/>
              </div>
              <div className="arm rightarm"/>
            </div>
            <div className="legwrap">
              <div className="leg leftleg"/>
              <div className="leg rightleg"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
