import React, { Component } from 'react';
import './Score.css'


class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <div id='ScoreTo'>
                <div id='chiffre'>{this.props.newScore}</div>
            </div>
            </div>
         );
    }
}
 
export default Score;