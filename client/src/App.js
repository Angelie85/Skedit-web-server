import React, { Component } from 'react';
import './App.css';
import MainCalendar from './components/main-calendar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <MainCalendar/>
        </div>
      </div>
    );
  }
}

export default App;
