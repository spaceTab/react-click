import React from "react";

const cardStyle = {
    Card: {
        width: '200px',
        height: '200px',
        // margin: '15px 15px 15px 15px'
    }
}

const imageSize = {
    Card: {
        width: "200px",
        height: "200px"
    }
}

const Card = props => (

  <div className="container">
    <div className="col s6 l3">
        <div className="row">
            <div className="card hoverable" id={props.id} style={cardStyle.Card}>
                <img className="ImageBox" src={props.src}
                    alt={props.alt}
                    style={imageSize.Card}
                    onClick={() => props.handleClick(props.id)}
                />
            </div>
        </div>
    </div>
    </div>
)

export default Card;

