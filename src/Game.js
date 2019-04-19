import React, { Component } from 'react';
import Board from './Board';


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
 
    }
   
    render() {
        let image=this.props.location.state.char;
       
        return (
            <div className="game">
                <Board char={image}/>
            </div>
        );
    }
}

export default Game;