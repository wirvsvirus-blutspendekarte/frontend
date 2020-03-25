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
import {Dropdown, DropdownItem} from "react-bootstrap";

class MenuBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: []
    }
  }

  handleSearchChange = (e) => {
    var query = e.target.value;

    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      this.setState({
        searchResults: JSON.parse(xhr.responseText)
      });
    });
    xhr.open('GET', 'https://blutspendekarte.de/backend/bloodDonorCentre/getMatching?q=' + encodeURIComponent(query));
    xhr.send()
  }

  onSearchClick = (item) => {
    this.setState({
      searchResults: []
    });
    if (this.props.onSearchClick) {
      this.props.onSearchClick(item);
    }
  }
  render() {
    return (
      <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo.png"
            height="50"
            style={{marginTop: "-10px", marginBottom: "-20px"}}
            className="d-inline-block align-top"
          />{' '}
          Blutspendekarte
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{float: "right"}}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto text-lg-center text-left">
            <Nav.Link as={Link} to="/">Karte</Nav.Link>
            <Nav.Link as={Link} to="/corona">Corona-FAQ</Nav.Link>
            <Nav.Link as={Link} to="/faq">Allgemeine FAQ</Nav.Link>
            <Nav.Link as={Link} to="/datenschutz">Datenschutzerklärung</Nav.Link>
            <Nav.Link as={Link} to="/impressum">Impressum</Nav.Link>

          </Nav>
          <Form inline>
            <Dropdown show={this.state.searchResults.length>0}>
              <FormControl type="text" placeholder="Suche" onChange={this.handleSearchChange}  className="mr-sm-2" />

              <div className="d-none d-lg-block">
                <Dropdown.Menu alignRight>
                  {this.state.searchResults.map(item => (
                    <DropdownItem onSelect={() => this.onSearchClick(item)} key={item.id}>{item.name}</DropdownItem>
                  ))}
                </Dropdown.Menu>
              </div>
              <div className="d-block d-lg-none">
                <Dropdown.Menu>
                  {this.state.searchResults.map(item => (
                    <DropdownItem onSelect={() => this.onSearchClick(item)} key={item.id}>{item.name}</DropdownItem>
                  ))}
                </Dropdown.Menu>
              </div>
            </Dropdown>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MenuBar;
