import React from 'react';

//importing styles
import './cards.css'
import 'bootstrap/dist/css/bootstrap.css';
import {cards} from "./DummyData";
import Card from "../Card/Card";


const Cards = () => {
    return (
        <div className={"cards-page-main"}>
            <h1 className={"cardsPage-header text-center"}>CARDS</h1>
            <div className="card-container">
                {cards.map((c)=> <Card image={c.image} title={c.title} description={c.description} number={c.id} key={c.id}/>)}
            </div>
        </div>
    );
}

export default Cards;