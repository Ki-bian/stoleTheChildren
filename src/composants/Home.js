import React, { Component } from 'react';
import './Home.css';
import ButtonPlayHome from './ButtonPlayHome';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div id='TitleHome'>
                    <div id='borderTitle'>
                        <h1>SteelTheChildren</h1>
                    </div>
                </div>
                <ButtonPlayHome />
            </div>
        );
    }
}

export default Home;



