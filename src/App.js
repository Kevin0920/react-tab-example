import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import Tabs from './components/Tabs';
import Panel from './components/Panel';

import './App.css';

const tabData = [
     {
       id: 't1',
       title: 'Meat',
       isActive: true
     }, {
       id: 't2',
       title: 'Vegeterble',
       isActive: false
     }, {
       id: 't3',
       title: 'Profile',
       isActive: false
     }
];


class App extends Component {

  state = {
    tabData: [
      {    
        id:'t1', 
        title: 'Meat',
        isActive: true
      },
      {
        id: 't2',
        title: 'Vegeterble',
        isActive: false
      },
      {
        id: 't3',
        title: 'Profile',
        isActive: false
      }
    ],
    activeTab: tabData[0]
  };


  handleClick = (tab) => {
    this.setState({
      activeTab: tab
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Tab App</h1>
        <div>
          <Tabs
            data={this.state.tabData}
            activeTab={this.state.activeTab}
            changeTab={this.handleClick}
          />
          <Panel 
            activeTab={this.state.activeTab}
          />
        </div>
      </div>
    );
  }
}

export default App;
