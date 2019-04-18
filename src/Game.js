import React, { Component } from 'react';
import axios from 'axios';
import Board from './Board';


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentWillMount() {
        axios.get(`http://easteregg.wildcodeschool.fr/api/eggs/random`)
        .then(res => {
                const egg = res.data;
                this.setState({ egg, });
            })
    }
    

    render() {
        return (
            <div className="game">
                <Board />
            </div>
        );
    }
}

export default Game;