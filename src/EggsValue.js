import React, { Component } from 'react';
import './EggsValue.css';

const eggTab = [
    {
        score: 1,
        image: "./junk1.png",
    },
    {
        score: 2,
        image: "./basic1.png",
    },
    {
        score: 3,
        image: "./fine1.png",
    },
    {
        score: 4,
        image: "./ascended1.png",
    },
    {
        score: 5,
        image: "./exotic1.png",
    },
    {
        score: 6,
        image: "./rare1.png",
    },
    {
        score: 7,
        image: "./masterwork1.png",
    },
    {
        score: 8,
        image: "./legendary1.png",
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
