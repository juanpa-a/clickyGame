import React from "react";

function Header(props){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4>Clicky Game</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>Click an image to start playing</h5>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4 className="score">Score: {props.score} || Top Score: {props.topScore} </h4>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Header;