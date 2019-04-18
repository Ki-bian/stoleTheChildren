import React, { Component } from 'react';

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return ( 
            <div className='chooseCharac'>
            <img src="./burns.png" alt='tg'/>
            <img src='' alt='tt'/>
            <img src='' alt='tt'/>
            </div>
         );
    }
}

export default Character;