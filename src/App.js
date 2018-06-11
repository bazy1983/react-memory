import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SmurfCard from "./components/cards"
import smurfObj from "./cards.json"
console.log(smurfObj)

class App extends Component {
  state = {
    smurfs: smurfObj
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.smurfs.map((smurf) => 
          (<SmurfCard 
            key = {smurf.id}
            image = {smurf.img}
            className = "col-md-3"
          />)
          )}
        </div>
      </div>
    )
  };
}

export default App;
