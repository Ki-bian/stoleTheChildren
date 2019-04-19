
import React, { Component } from 'react';
import './Game.css';
import bebe from './assets/img/bebe2.gif'
import bebe2 from './assets/img/bebe touché.gif'
import Egg from './Egg';
import Score from './composants/Score';
import Timer from './composants/Timer';
import EggsValue from './EggsValue'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      pointer: 0,
      pointer2: 0,
      pointer3: 0,
      imgs: [
        bebe,
        bebe2,
      ],
      imgs2: [
        bebe,
        bebe2,
      ],
      imgs3: [
        bebe,
        bebe2,
      ]
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick() {
    const { length } = this.state.imgs;
    const { pointer } = this.state;
    const newPointer = pointer === length - 1 ? 0 : pointer + 1;
    this.setState({ pointer: newPointer });
    setTimeout(() => {
      this.setState({ pointer: 0 });
    }, 800);
  }

  handleClick2() {
    const { length } = this.state.imgs2;
    const { pointer2 } = this.state;
    const newPointer = pointer2 === length - 1 ? 0 : pointer2 + 1;
    this.setState({ pointer2: newPointer });
    setTimeout(() => {
      this.setState({ pointer2: 0 });
    }, 800);
  }

  handleClick3() {
    const { length } = this.state.imgs3;
    const { pointer3 } = this.state;
    const newPointer = pointer3 === length - 1 ? 0 : pointer3 + 1;
    this.setState({ pointer3: newPointer });
    setTimeout(() => {
      this.setState({ pointer3: 0 });
    }, 800);
  }
  getScore = (newScore, id) => {
    if (id === "egg1") {
      this.setState({
        score: this.state.score + newScore,
        pointer: 1,
      });
      setTimeout(() => {
        this.setState({ pointer: 0 });
      }, 800);
    }
    if (id === "egg2") {
      this.setState({
        score: this.state.score + newScore,
        pointer2: 1,
      });
      setTimeout(() => {
        this.setState({ pointer2: 0 });
      }, 800);
    }
    if (id === "egg3") {
      this.setState({
        score: this.state.score + newScore,
        pointer3: 1,
      });
      setTimeout(() => {
        this.setState({ pointer3: 0 });
      }, 800);
    }
  }

  render() {
    const { pointer, pointer2, pointer3, imgs, imgs2, imgs3 } = this.state;
    let image;
    switch (this.props.char) {
      case 'burns':
          image = "./burns.png";
          break;
      case 'voldemort':
          image = "./voldemort.jpg";
          break;
      case 'witch':
          image = "./reine.png";
          break;
      default:
          break;
  }
    return (
      <div className="board">
        
        <div id='timereteggs'>
          <div id='timerContainer'>
            <Timer score={this.state.score} />
            <div id='scoreC'>
            <img src={image} className="char"/>
            <Score newScore={this.state.score} />
            </div>
          </div>
          <div id='eggsContainer'>
            <EggsValue />
          </div>
        </div>
        <div className="bebe">
          <img src={imgs[pointer]} onClick={this.handleClick} alt="bebe" />
          <Egg id="egg1" score={this.getScore} />
        </div>
        <div className="bebe2">
          <img src={imgs2[pointer2]} onClick={this.handleClick2} alt="bebe2" />
          <Egg id="egg2" score={this.getScore} />
        </div>
        <div className="bebe3">
          <img src={imgs3[pointer3]} onClick={this.handleClick3} alt="bebe3" />
          <Egg id="egg3" score={this.getScore} />
        </div>
      </div>
    );
  }

}
export default Board;
