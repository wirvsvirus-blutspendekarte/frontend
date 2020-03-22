import React from 'react';
import App from "./App";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {
  Link,
  BrowserRouter as Router
} from "react-router-dom";

class MenuBar extends React.Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.png"
            height="50"
            style={{marginTop: "-10px", marginBottom: "-20px"}}
            className="d-inline-block align-top"
          />{' '}
          juFORUM-Blutspendekarte
        </Navbar.Brand>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Karte</Nav.Link>
          <Nav.Link as={Link} to="/list">Liste</Nav.Link>
          <Nav.Link as={Link} to="/faq">Häufige Fragen</Nav.Link>
          <Nav.Link as={Link} to="/corona">Corona-Infos</Nav.Link>
          <Nav.Link as={Link} to="/datenschutz">Datenschutzerklärung</Nav.Link>
          <Nav.Link as={Link} to="/impressum">Impressum</Nav.Link>

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Suche" className="mr-sm-2" />
          <Button variant="outline-info">Suche</Button>
        </Form>
      </Navbar>
    )
  }
}

export default MenuBar;
