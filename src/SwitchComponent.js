import React, { Component, PropTypes } from 'react';

export default class Switch extends Component{
  constructor(props){
    super(props);
    this.state = {
      toggle: false,
      throttleLimitText: "",
    };

    this.handleSwitchPress = this.handleSwitchPress.bind(this);
    this.toggleCount = 0;
    this.toggleLimit = null;
  }

  handleSwitchPress(){
    if(!this.checkToggleLimit()){
      alert("please set threshold");
      return;
    }

    if(this.toggleCount < this.toggleLimit){
      this.setState({toggle: !this.state.toggle});
      this.toggleCount += 1;
    }
    else this.setState({throttleLimitText: "Whoa! You clicked too much"});
  }

  resetThrottleLimit(){
    if(!this.checkToggleLimit()){
      alert("please set threshold");
      return;
    }

    if(this.toggleCount < this.toggleLimit)
      alert("Limit has not exhausted yet.");
    else{
      this.toggleCount = 0;
      this.setState({throttleLimitText: ""});
      alert("Limit reset successfully.");
    }
  }

  checkToggleLimit(){
    return this.toggleLimit == null ? false : true;
  }

  render(){
    return(
      <div>
        <input type="number" placeholder="Specify switch toggle threshold" onChange={(e) => this.toggleLimit = e.target.value }/>
        <div className="switch" onClick={this.handleSwitchPress}>
          <input type="checkbox" checked={this.state.toggle} onChange={() => {}}/>
          <span className="slider round"></span>
        </div>
        <p style={{color: "red"}}>{this.state.throttleLimitText}</p>
      </div>
    )
  }
}
