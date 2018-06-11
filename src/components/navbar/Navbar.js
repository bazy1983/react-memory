import React, {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return(
            <div className="myNavbar mb-3">
                <div className="float-left">
                    Smurf Memory Game
                </div>
            </div>
        )
    }
}

export default Navbar;