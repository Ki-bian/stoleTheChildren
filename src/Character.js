import React, { Component } from 'react';
import './Character.css';
import { NavLink } from 'react-router-dom';

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className='characTitle'>
                   <h1> How do you feel today ? </h1>
            </div>
                <div className='chooseCharac'>
                    <div className='characFeel'>
                        <h3>  Viscious ?</h3>
                            <nav>
                                <NavLink to='./game'><img className='imgcharac' src="./burns.png" alt='monty'/></NavLink>
                            </nav>
                    </div>
                    <div className='characFeel'>
                        <h3>  Angry ?</h3>
                            <nav>
                                <NavLink to='./game'><img className='imgcharac' src='./voldemort.jpg' alt='voldemort' /></NavLink>
                            </nav>
                    </div>
                    <div className='characFeel'>
                        <h3>  Generous ?</h3>
                            <nav>
                                <NavLink to='./game'><img className='imgcharac' src='./reine.png' alt='reine' /></NavLink>
                            </nav>
                    </div>
                </div>
            </div>

        );
    }
}

export default Character;