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
                        <div className="charaname">Viscious ?</div>
                            <nav>
                                <NavLink to={{ pathname: '/game', state: { char: 'burns'} }}><img className='imgcharac' src="./burns.png" alt='monty'/></NavLink>
                            </nav>
                    </div>
                    <div className='characFeel'>
                        <div className="charaname">Angry ?</div>
                            <nav>
                                <NavLink to={{ pathname: '/game', state: { char: 'voldemort'} }}><img className='imgcharac' src='./voldemort.jpg' alt='voldemort' /></NavLink>
                            </nav>
                    </div>
                    <div className='characFeel'>
                        <div className="charaname">Generous ?</div>
                            <nav>
                                <NavLink to={{ pathname: '/game', state: { char: 'witch'} }}><img className='imgcharac' src='./reine.png' alt='reine' /></NavLink>
                            </nav>
                    </div>
                </div>
            </div>

        );
    }
}

export default Character;