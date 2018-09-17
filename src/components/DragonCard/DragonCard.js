import React from "react";
import "./DragonCard.css";

const DragonCard = props => (
    <div className="card" >
        <div className="img-container">
            <img alt={props.name} src={props.image} onClick={() => props.onDragonCardClick(props.id)} />
        </div>
        <div className="content">
            <ul>
                <li>
                    <strong>Name:</strong> {props.name}
                </li>

            </ul>
        </div>

    </div>
);

export default DragonCard;
