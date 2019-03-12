import React, { Component } from 'react';
import VerticalModal from './modals/VerticalModal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

class Beginning extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <ButtonToolbar>
        <Button
          variant='primary'
          onClick={() => this.setState({ modalShow: true })}>
          Launch vertically centered modal
        </Button>

        <VerticalModal
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
    );
  }
}

export default Beginning;
