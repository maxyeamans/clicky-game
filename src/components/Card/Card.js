import React from "react";
import "./Card.css";

const Card = (props) => (
    // <div className="card col-lg-3 col-md-4 col-sm-2">
    //     {<img src={"./assets/images/" + props.source + ".png"} alt={props.source} id={props.id} key={props.id} />}
    // </div>
    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
        <img
            className="img-fluid"
            src={"./assets/images/" + props.source + ".png" }
            alt={props.source}
            id={props.id}
            key={props.id}
            onClick={ () => props.handleClick(props.id) } />
    </div>
)

export default Card;