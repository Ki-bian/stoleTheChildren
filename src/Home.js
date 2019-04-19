import React, { Component } from 'react';
import './Home.css';
//import ButtonPlayHome from './ButtonPlayHome';
import Character from './Character';

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
                        <img src="./logo.png" alt="logo"/>
                    </div>
                </div>
                <Character/>
                {/*<ButtonPlayHome />*/}
            </div>
        );
    }
}

export default Home;
