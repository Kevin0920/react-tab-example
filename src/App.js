import React, { Component } from 'react';

import Tab from './components/Tab';
import './App.css';

class App extends Component {

  state = {
    tabHeaders: ['Tab 1', 'Tab 2', ' Tab 3', ' Tab 4']
  };


  render() {
    return (
      <div className="App">
        <h1>Tab App</h1>
        <Tab tabHeaders={this.state.tabHeaders}/>
      </div>
    );
  }
}

export default App;
