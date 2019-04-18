import React, { Component } from 'react';
import axios from 'axios';
import './Egg.css';



class Egg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            egg : "",
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
            <div className="eggImage">
                <img src={this.state.egg.image} alt={this.state.egg.name} className = {this.state.rarity}/>
            </div>
         );
    }
}
 
export default Egg;