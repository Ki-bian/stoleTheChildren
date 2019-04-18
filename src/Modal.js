import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css';
import { link } from 'fs';
// import { Link } from 'react-router-dom';


class ModalScore extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true,
    };
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
            Your score this round : 
            </div>
          </Modal.Body>
          <Modal.Footer id="modalFoot">
            <Link exact to="/" onClick={() => reset()}>
              <Button className="buttonModalScore" onClick={this.handleClose}>
              Best scores
              </Button>
            </Link>
            <Link exact to="/" onClick={() => reset()}>
              <Button className="buttonModalAgain" onClick={this.handleClose}>
              Play again
              </Button>
            </Link>
        </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalScore;

