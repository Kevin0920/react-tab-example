import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import Tab from './components/Tab';
import './App.css';

class App extends Component {

  state = {
    tabHeaders: [
      { id:'t1', 
        isActive: true,
        title: <strong><span role="img">🍗</span> Meat</strong>,
        panel: <div><p>Bacon ipsum dolor amet pork prosciutto tail ground round cow pancetta ham beef.  Brisket cupim shoulder drumstick turkey sausage cow pork beef pig venison boudin.  Ham hock bacon hamburger alcatra boudin shank shankle porchetta short ribs.  Jowl shank shoulder, pork belly tail ham hock ribeye fatback sirloin doner beef swine ground round meatball hamburger.</p></div>
      },
      {
        id: 't2',
        isActive: false,
        title: <strong><span role="img">😴</span> Vegeterble</strong>,
        panel: <div><p>Et ullamco enim consectetur eiusmod sit amet magna anim non sint labore minim dolore ad.</p></div>
      },
      {
        id: 't3',
        isActive: false,
        title: <strong><span role="img">😁</span> Profile</strong>,
        panel: <div><p>Et ullamco enim consectetur eiusmod sit amet magna anim non sint labore minim dolore ad.</p></div> 
      }
    ]
  };


  render() {
    return (
      <div className="App">
        <h1>Tab App</h1>
        <Tab 
          tabHeaders={this.state.tabHeaders}
          onChange={tabHeaders => this.setState({tabHeaders})}
          />
      </div>
    );
  }
}

export default App;
