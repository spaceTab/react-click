import React from "react";

const ScoreCard = props => (
    
    <div className="container">
        <div class="card grey lighten-3 z-depth-4">
            <div className="center-align">Current Score: {props.score}</div>
            <div className="center-align">Top Score: {props.hiScore}</div>
        </div>
 </div>
)

export default ScoreCard