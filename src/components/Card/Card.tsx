import React from 'react';

import '../CardsPage/cards.css'
import 'bootstrap/dist/css/bootstrap.css';

interface CardProps {
    image: string,
    title: string,
    description: string,
    number: number
}

const Card = (props: CardProps) => {
    return (
            <div className="card ">
                <img src={props.image} className="card-img-top" alt="..."></img>
                <div className="card-body card1">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className={"text-center fixed-bottom"}>{props.number}</p>
                </div>
            </div>
    );
}

export default Card;