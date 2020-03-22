import React, { useState } from 'react';
import { Modal, Button, Form, Col } from "react-bootstrap";
import { DateTime } from 'react-datetime-bootstrap';

class RequestAppointmentDialog extends React.Component {
  constructor() {
    super();
    this.state = {
      vorname: '',
      nachname: '',
      email: '',
      handynummer: '',
      anmerkungen: '',
      termin_1_datum: '',
      termin_1_zeit: '',
      termin_2_datum: '',
      termin_2_zeit: '',
      termin_3_datum: '',
      termin_3_zeit: ''
    };
  }

  handleClose = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  submit = () => {
    var data = {
      id: this.props.id,
      ...this.state
    }
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <Modal show={true} onHide={this.handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Termin anfragen</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group as={Form.Row}>
              <Form.Label column sm={4}>
                Name
              </Form.Label>
              <Col sm={4}>
                <Form.Control placeholder="Vorname" value={this.state.vorname} onChange={(e) => this.setState({ vorname: e.target.value })}/>
              </Col>
              <Col sm={4}>
                <Form.Control placeholder="Nachname " value={this.state.nachname} onChange={(e) => this.setState({ nachname: e.target.value })}/>
              </Col>
            </Form.Group>

            <Form.Group as={Form.Row}>
              <Form.Label column sm={4}>
                E-Mail
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="email" placeholder="E-Mail"  value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
              </Col>
            </Form.Group>

            <Form.Group as={Form.Row}>
              <Form.Label column sm={4}>
                Handynummer
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="phone" placeholder="Handynummer"  value={this.state.handynummer} onChange={(e) => this.setState({ handynummer: e.target.value })}/>
              </Col>
            </Form.Group>

            <Form.Group as={Form.Row}>
              <Form.Label column sm={4}>
                Anmerkungen
              </Form.Label>
              <Col sm={8}>
                <Form.Control as="textarea" placeholder="Anmerkungen "   value={this.state.anmerkungen} onChange={(e) => this.setState({ anmerkungen: e.target.value })}/>
              </Col>
            </Form.Group>

            <Form.Group as={Form.Row}>
              <Form.Label column sm={4}>
                Wunschtermin
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="date" value={this.state.termin_1_datum} onChange={(e) => this.setState({ termin_1_datum: e.target.value })}/>
              </Col>
              <Col sm={4}>
                <Form.Control type="time" value={this.state.termin_1_zeit} onChange={(e) => this.setState({ termin_1_zeit: e.target.value })}/>
              </Col>
            </Form.Group>

            <Form.Group as={Form.Row}>
              <Form.Label column sm={4}>
                1.&nbsp;Alternativtermin
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="date" value={this.state.termin_2_datum} onChange={(e) => this.setState({ termin_2_datum: e.target.value })}/>
              </Col>
              <Col sm={4}>
                <Form.Control type="time" value={this.state.termin_2_zeit} onChange={(e) => this.setState({ termin_2_zeit: e.target.value })}/>
              </Col>
            </Form.Group>

            <Form.Group as={Form.Row}>
              <Form.Label column sm={4}>
                2.&nbsp;Alternativtermin
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="date" value={this.state.termin_3_datum} onChange={(e) => this.setState({ termin_3_datum: e.target.value })}/>
              </Col>
              <Col sm={4}>
                <Form.Control type="time" value={this.state.termin_3_zeit} onChange={(e) => this.setState({ termin_3_zeit: e.target.value })}/>
              </Col>
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Abbrechen
          </Button>
          <Button variant="primary" onClick={this.submit}>
            Absenden
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default RequestAppointmentDialog;
