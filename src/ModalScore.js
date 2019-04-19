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
              Congratuls, you rob these horrible kids !
            </div>
            <div className='actualScore'>
              Your score : {this.props.score}
            </div>
          </Modal.Body>
          <Modal.Footer id="modalFoot">
          <NavLink to='./'>
            <Button className="buttonModalScore" onClick={this.handleClose}>
              Home
              </Button>
              </NavLink>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalScore;

