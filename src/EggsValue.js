import React, { Component } from 'react';
import './EggsValue.css';

const eggTab = [
    {
        name: 'Junk',
        score: 1,
        image: "./junk.png",
    },
    {
        name: 'Basic',
        score: 2,
        image: "./basic.png",
    },
    {
        name: 'Fine',
        score: 3,
        image: "./fine.png",
    },
    {
        name: 'Ascended',
        score: 4,
        image: "./ascended.png",
    },
    {
        name: 'Exotic',
        score: 5,
        image: "./exotic.png",
    },
    {
        name: 'Rare',
        score: 6,
        image: "./rare.png",
    },
    {
        name: 'Masterwork',
        score: 7,
        image: "./masterwork.png",
    },
    {
        name: 'Legendary',
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
                            <p>Points : {eggitem.score}</p>
                            <img src={eggitem.image} />
                        </div>
                    ))

                }

            </div>


        );
    }
}

export default EggsValue;
