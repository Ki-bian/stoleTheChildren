import React, { Component } from 'react';
import axios from 'axios';

let eggJunk = "";
let eggBasic = "j";
let eggRare = "";
let eggLegendary = "";

class EggsValue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eggs: "",
        }
        this.basic = {
            name : "basic",
            url : "https://banner2.kisspng.com/20180525/lec/kisspng-pokmon-bulbasaur-egg-charmander-drawing-broken-egg-5b07f7302287f2.6863793515272486881415.jpg",
            points : 1,
        }
        this.rare = {
            name : "rare",
            url: "http://miam-images.m.i.pic.centerblog.net/o/094d0369.png",
            points : 2,
        }
        this.legendary = {
            name: "legendary",
            url: "https://shop.whitehousehistory.org/media/catalog/product/t/r/trump_egg_gold_shop.png",
            points : 3,
        }
        

    }

    componentWillMount() {
        axios.get(`http://easteregg.wildcodeschool.fr/api/eggs`)
            .then(res => {
                const eggs = res.data;
                this.setState({ eggs, }, this.assignValues);
            })
            
            
        }
    assignValues = () => {
        let egg = this.state.eggs
        if (egg && egg.length > 0) {
            eggJunk = egg.filter(object => { return object.rarity === "junk" });
            eggBasic = egg.filter(object => { return object.rarity === "basic" });
            eggRare = egg.filter(object => { return object.rarity === "rare" });
            eggLegendary = egg.filter(object => { return object.rarity === "legendary" });
            console.log(JSON.stringify(eggBasic))
        }

    }

    render() {
        
        console.log(eggBasic)

        return (
            <div className="eggsValue">

            <div> </div>

            </div>
        );
    }
}

export default EggsValue;
