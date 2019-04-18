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
        let image;
        switch (this.state.egg.rarity) {
            case 'junk':
                eggscore = 1;
                image = "./junk.png";
                break;
            case 'basic':
                eggscore = 2;
                image = "./basic.png";
                break;
            case 'fine':
                eggscore = 3;
                image = "./fine.png";
                break;
            case 'ascended':
                eggscore = 4;
                image = "./ascended.png";
                break;
            case 'exotic':
                eggscore = 5;
                image = "./exotic.png";
                break;
            case 'rare':
                eggscore = 6;
                image = "./rare.png";
                break;
            case 'masterwork':
                eggscore = 7;
                image = "./masterwork.png";
                break;
            case 'legendary':
                eggscore = 8;
                image = "./legendary.png";
                break;
            default:
                break;
        }

        return (
            <div className="eggImage" onClick={() => this.props.score(eggscore)} >
                <img src={image} alt={this.state.egg.name} className={this.state.rarity} />
            </div>
        );
    }
}

export default Egg;