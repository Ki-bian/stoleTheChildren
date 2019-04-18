import React, { Component } from 'react';
import './Home.css';
import ButtonPlayHome from './ButtonPlayHome';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
            <h1>SteelTheChildren</h1>
            <ButtonPlayHome/>
            </div>
          );
    }
}
 
export default Home;



