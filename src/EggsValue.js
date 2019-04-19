import React, { Component } from 'react';
import './EggsValue.css';

const eggTab = [
    {
        score: 1,
        image: "./junk.png",
    },
    {
        score: 2,
        image: "./basic.png",
    },
    {
        score: 3,
        image: "./fine.png",
    },
    {
        score: 4,
        image: "./ascended.png",
    },
    {
        score: 5,
        image: "./exotic.png",
    },
    {
        score: 6,
        image: "./rare.png",
    },
    {
        score: 7,
        image: "./masterwork.png",
    },
    {
        score: 8,
        image: "./legendary.png",
    }
]

class EggsValue extends Component {

    render() {
        return (
            <div className="alleggs">

                {
                    eggTab.map((eggitem, index) => (
                        <div className="eggs">
                            <h3>{eggitem.name}</h3>
                            <p id='ptsnumb'>{eggitem.score} pts</p>
                            <img src={eggitem.image} alt={eggitem.name} />
                        </div>
                    ))

                }

            </div>


        );
    }
}

export default EggsValue;
