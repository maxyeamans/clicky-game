import React from "react";
import "./Jumbotron.css";

const Jumbotron = (props) => (
    // <div className="card col-lg-3 col-md-4 col-sm-2">
    //     {<img src={"./assets/images/" + props.source + ".png"} alt={props.source} id={props.id} key={props.id} />}
    // </div>
    <div className="jumbotron">
        <h1>Clicky Game</h1>
        <h3>{props.message}</h3>
        <p>{`Current score: ${props.score}`}</p>
    </div>
)

export default Jumbotron;