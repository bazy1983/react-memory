import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/wrapper"
import SmurfCard from "./components/cards"
import Navbar from "./components/navbar"
import smurfObj from "./cards.json"


let clickedImgs = []; //used as clicked image memory

class App extends Component {
  state = {
    smurfs: smurfObj
  };

  //game logic
  //counts and saves all clicked images 
  rememberClick = (imgNumber) => {
    //checks if image already been clicked
    if (clickedImgs.includes(imgNumber)) {
      //losing the game
      clickedImgs = []
    } else {
      //if not clicked before, save it in array
      clickedImgs.push(imgNumber)

      if (clickedImgs.length === 12) {
        //winning the game
        clickedImgs = []
      }
    }
    //shuffling the images and setting the state
    smurfObj.sort(() => {
      return (0.5 - Math.random())
    })
    this.setState({ smurfs: smurfObj })
  }

  //render component
  render() {
    return (
      <Wrapper>
        <Navbar />
        <div className="container">
          <div className="row">
            {this.state.smurfs.map((smurf) =>
              (<SmurfCard
                key={smurf.id}
                cardID={smurf.id}
                rememberClick={this.rememberClick}
                image={smurf.img}
                className="col-md-3"
              />)
            )}
          </div>
        </div>
      </Wrapper>
    )
  };
}

export default App;
