import React, { Component } from 'react';
import axios from 'axios';
import './Egg.css';



class Egg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            egg: "",
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
        let eggscore;
        switch (this.state.egg.rarity) {
            case 'junk':
                eggscore = 1;
                break;
            case 'basic':
                eggscore = 2;
                break;
            case 'fine':
                eggscore = 3;
                break;
            case 'exotic':
                eggscore = 4;
                break;
            case 'legendary':
                eggscore = 5;
                break;
            default:
                break;
        }

        return (
            <div className="eggImage" onClick={() => this.props.score(eggscore)} >
                <img src={this.state.egg.image} alt={this.state.egg.name} className={this.state.rarity} />
            </div>
        );
    }
}

export default Egg;