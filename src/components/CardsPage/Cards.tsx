import React from 'react';

//importing styles
import './cards.css'
import 'bootstrap/dist/css/bootstrap.css';

//importing images
const image1 = require('./images/image1.jpg');
const image2 = require('./images/image2.jpg');
const image3 = require('./images/image3.jpg');
const image4 = require('./images/image4.jpg');
const image5 = require('./images/image5.jpg');
const image6 = require('./images/image6.jpg');
const image7 = require('./images/image7.jpg');
const image8 = require('./images/image8.jpg');
const image9 = require('./images/image9.jpg');
const image10 = require('./images/image10.jpg');


const Cards = () => {
    return (
        <div className={"cards-page-main"}>
            <h1 className={"cardsPage-header text-center"}>CARDS</h1>

            <div className="card-container">
                <div className="card ">
                    <img src={image1} className="card-img-top" alt="..."></img>
                    <div className="card-body card1">
                        <h5 className="card-title">Card 1</h5>
                        <p className="card-text">Some quick description text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <p className={"text-center fixed-bottom"}>1</p>
                    </div>
                </div>

                <div className="card">
                    <img src={image2} className="card-img-top" alt="..."></img>
                    <div className="card-body card1">
                        <h5 className="card-title">Card 2</h5>
                        <p className="card-text">Some quick description text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <p className={"text-center fixed-bottom"}>2</p>
                    </div>
                </div>

                <div className="card">
                    <img src={image3} className="card-img-top" alt="..."></img>
                    <div className="card-body card1">
                        <h5 className="card-title">Card 3</h5>
                        <p className="card-text">Some quick description text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <p className={"text-center fixed-bottom"}>3</p>
                    </div>
                </div>

                <div className="card">
                    <img src={image4} className="card-img-top" alt="..."></img>
                    <div className="card-body card1">
                        <h5 className="card-title">Card 4</h5>
                        <p className="card-text">Some quick description text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <p className={"text-center fixed-bottom"}>4</p>
                    </div>
                </div>

                <div className="card">
                    <img src={image5} className="card-img-top" alt="..."></img>
                    <div className="card-body card1">
                        <h5 className="card-title">Card 5</h5>
                        <p className="card-text">Some quick description text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <p className={"text-center fixed-bottom"}>5</p>
                    </div>
                </div>

                <div className="card">
                    <img src={image6} className="card-img-top" alt="..."></img>
                    <div className="card-body card1">
                        <h5 className="card-title">Card 6</h5>
                        <p className="card-text">Some quick description text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <p className={"text-center fixed-bottom"}>6</p>
                    </div>
                </div>

                <div className="card">
                    <img src={image7} className="card-img-top" alt="..."></img>
                    <div className="card-body card1">
                        <h5 className="card-title">Card 7</h5>
                        <p className="card-text">Some quick description text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <p className={"text-center fixed-bottom"}>7</p>
                    </div>
                </div>

                <div className="card">
                    <img src={image8} className="card-img-top" alt="..."></img>
                    <div className="card-body card1">
                        <h5 className="card-title">Card 8</h5>
                        <p className="card-text">Some quick description text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <p className={"text-center fixed-bottom"}>8</p>
                    </div>
                </div>

                <div className="card">
                    <img src={image9} className="card-img-top" alt="..."></img>
                    <div className="card-body card1">
                        <h5 className="card-title">Card 9</h5>
                        <p className="card-text">Some quick description text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <p className={"text-center fixed-bottom"}>9</p>
                    </div>
                </div>

                <div className="card mycard">
                    <img src={image10} className="card-img-top" alt="..."></img>
                    <div className="card-body card1">
                        <h5 className="card-title">Card 10</h5>
                        <p className="card-text">Some quick description text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <p className={"text-center fixed-bottom"}>10</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;