import React from 'react';

import './style.css'

function RecreateLayout(props) {

    return (
        <div className="layout-box">
            <p className="layout-name">{props.name}</p>
            <h2 className="layout-points">Points: {props.points}</h2>
        </div>
    )
}

export default RecreateLayout