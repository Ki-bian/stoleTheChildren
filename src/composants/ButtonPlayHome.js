import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './ButtonPlayHome.css';

class ButtonPlayHome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div class='container'>
                <Button id='PlayButton' color="danger" size="lg" block>Play</Button>
            </div>
          );
    }
}
 
export default ButtonPlayHome;