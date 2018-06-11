import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SmurfCard from "./components/cards"
import smurfObj from "./cards.json"

let clickedImgs = [];

class App extends Component {
  state = {
    smurfs: smurfObj
  };

  rememberClick = (imgNumber) => {
    if (clickedImgs.includes(imgNumber)){
      console.log("you lost")
    } else {
      clickedImgs.push(imgNumber)
    }
    
    smurfObj.sort(() => {
      return (0.5 - Math.random())
    })
    this.setState({smurfs : smurfObj})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.smurfs.map((smurf) => 
          (<SmurfCard 
            key = {smurf.id}
            cardID = {smurf.id}
            rememberClick = {this.rememberClick}
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
