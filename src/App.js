import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/Posts/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Posts />
      </div>
    );
  }
}

export default App;
