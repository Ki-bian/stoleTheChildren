import React, { Component } from 'react';
import './Timer.css';
import ModalScore from '../ModalScore';

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 100,
            background: 'green',
        };
        this.style = {
            height: '100%',
        }


        setInterval(() => {
            const { width } = this.state;
            if (width > 100) {
                this.setState({
                    width: 101,
                    background: 'green'
                })
            }
            else if (width > 70) {
                this.setState({
                    width: width - 1,
                    background: 'green'
                })
            }
            else if (width > 30) {
                this.setState({
                    width: width - 1,
                    background: 'orange'
                })
            }
            else if (width > 0) {
                this.setState({
                    width: width - 1,
                    background: 'red'
                })
            }
            else if (width === 0) {
                this.setState({
                    width: 101,
                })
            }
        }, 100)
    }

    render() {
        return (
            <div className="barre">
                <div className="jauge" style={{ ...this.style, background: this.state.background, width: `${this.state.width}%`, transitionProperty: 'width', transitionDuration: '100ms' }} />
                <div>
                    {this.state.width===101?<ModalScore score={this.props.score}/>:''}
                </div>
            </div>
        );
    }
}

export default Timer;
