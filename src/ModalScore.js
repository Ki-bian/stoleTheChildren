import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ModalScore.css';
import { NavLink } from 'react-router-dom';


class ModalScore extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: true,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <Modal id="modalAlerte" show={show} onHide={this.handleClose}>
          <Modal.Header id="sasa" closeButton>
            <Modal.Title><p id="victory">Nice shoots ! Did you have fun ?</p></Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalBody">
            <div>
              Congratulation, you stole these horribles kids !
            </div>
            <div className='actualScore'>
              Your score this round : {this.props.score}
            </div>
          </Modal.Body>
          <Modal.Footer id="modalFoot">
          <NavLink to='./'>
            <Button className="buttonModalScore" onClick={this.handleClose}>
              Home
              </Button>
              </NavLink>
            <Button className="buttonModalAgain" onClick={this.handleClose}>
              Play again
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalScore;

