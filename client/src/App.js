import React, { Component } from 'react';
import './App.css';
import MainCalendar from './containers/MainCalendarContainer'

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
