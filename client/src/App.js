import React, { Component } from 'react';
import './App.css';
import MainCalendar from './containers/MainCalendarContainer'
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Header/>
          <MainCalendar/>
        </div>
      </div>
    );
  }
}

export default App;
