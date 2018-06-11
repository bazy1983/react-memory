import React, {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return(
            <div className="myNavbar mb-3">
                <div className="float-left navbarTextBig">
                    Smurf Memory Game
                </div>
                <div className = "float-right navbarTextSmall mt-3">
                    <div className = "d-inline mr-5">Score:<span className = "textColor">{this.props.score}</span></div>
                    <div className = "d-inline mr-5">High Score:<span  className = "textColor">{this.props.highScore}</span></div>
                    <div className = "d-inline mr-5">Win:<span  className = "textColor">{this.props.win}</span></div>
                    <div className = "d-inline mr-5">Loss:<span  className = "textColor">{this.props.loss}</span></div>

                </div>
            </div>
        )
    }
}

export default Navbar;