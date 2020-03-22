import React from 'react';
import { Modal, Button, Form, Col } from "react-bootstrap";
import { DateTime } from 'react-datetime-bootstrap';

class RequestAppointmentDialog extends React.Component {
  constructor() {
    super();
  }

  handleClose = () => {
    if (this.props.onClose) {
      this.props.onClose();
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
                <Form.Control placeholder="Vorname "/>
              </Col>
              <Col sm={4}>
                <Form.Control placeholder="Nachname "/>
              </Col>
            </Form.Group>

            <Form.Group as={Form.Row}>
              <Form.Label column sm={4}>
                E-Mail
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="email" placeholder="E-Mail "/>
              </Col>
            </Form.Group>

            <Form.Group as={Form.Row}>
              <Form.Label column sm={4}>
                Handynummer
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="phone" placeholder="Handynummer "/>
              </Col>
            </Form.Group>

            <Form.Group as={Form.Row}>
              <Form.Label column sm={4}>
                Anmerkungen
              </Form.Label>
              <Col sm={8}>
                <Form.Control as="textarea" placeholder="Anmerkungen "/>
              </Col>
            </Form.Group>

            <Form.Group as={Form.Row}>
              <Form.Label column sm={4}>
                Wunschtermin
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="date"/>
              </Col>
              <Col sm={4}>
                <Form.Control type="time"/>
              </Col>
            </Form.Group>

            <Form.Group as={Form.Row}>
              <Form.Label column sm={4}>
                1.&nbsp;Alternativtermin
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="date"/>
              </Col>
              <Col sm={4}>
                <Form.Control type="time"/>
              </Col>
            </Form.Group>

            <Form.Group as={Form.Row}>
              <Form.Label column sm={4}>
                2.&nbsp;Alternativtermin
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="date"/>
              </Col>
              <Col sm={4}>
                <Form.Control type="time"/>
              </Col>
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Abbrechen
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Absenden
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default RequestAppointmentDialog;
