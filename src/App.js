import React, { Component } from 'react';
import Switch from "./SwitchComponent.js";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.resetSwitch = this.resetSwitch.bind(this);
    this.sRef = null;
  }

  resetSwitch(){
    if(this.sRef)
      this.sRef.resetThrottleLimit();
  }

  render() {
    return (
      <div className="App">
        <p>Switch Component</p>
        <Switch ref={(refVal) => this.sRef = refVal}/>
        <button onClick={this.resetSwitch}>
          Reset toggle limit
        </button>
      </div>
    );
  }
}

export default App;
