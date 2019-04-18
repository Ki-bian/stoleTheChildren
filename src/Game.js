import React, { Component } from 'react';
import axios from 'axios';
import Egg from './Egg';
import Score from './composants/Score';


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
        }
    }
    componentWillMount() {
        axios.get(`http://easteregg.wildcodeschool.fr/api/eggs/random`)
            .then(res => {
                const egg = res.data;
                this.setState({ egg, });
            })
    }
    getScore = (newScore) => {
        this.setState({ score: this.state.score + newScore });
    }

    render() {
        return (
            <div className="game">
                <Egg score={this.getScore} />
                <Score newScore={this.state.score} />
            </div>
        );
    }
}

export default Game;