import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search_bar'
import VideoBar from './components/video_bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
         <SearchBar />
        </div>
        <div>
          <VideoBar/>
        </div>
      </div>
    );
  }
}

export default App;
