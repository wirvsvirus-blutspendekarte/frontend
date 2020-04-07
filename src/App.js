import React from 'react';
import './App.css';
import MenuBar from './MenuBar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  FrequentlyAskedQuestions,
  CoronaQuestions,
  Privacy,
  Imprint,
  NotImplementedYet,
  Map
} from './pages';
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";


var markers = [];


class App extends React.Component {

  componentWillMount() {
    this.fetchData();
    this.state = {
      markers: [],
      selectedPlace: null,
      modalIsOpen: true
    }
  }

  onSearchClick = (item) => {
    this.setState({
      selectedPlace: item
    });
  }

  fetchData() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      this.setState({
        markers: JSON.parse(xhr.responseText)
      })
    });
    xhr.open('GET', 'https://blutspendekarte.de/backend/bloodDonorCentre/getAll');
    xhr.send()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <MenuBar onSearchClick={this.onSearchClick} />
          <div className="content">
            <Modal centered show={this.state.modalIsOpen} onHide={() => this.setState({ modalIsOpen: false })}>
              <Modal.Header closeButton>
                <Modal.Title>Achtung: Beispieldaten!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <b>Bei der Blutspendekarte handelt es sich noch um einen Prototypen!</b> Die angezeigten Livedaten müssen weder vollständig
                noch korrekt sein, wir arbeiten aber mit Hochdruck daran. Fragen zu den Öffnungszeiten und der aktuellen Auslastung
                beantworten die meisten Blutspendezentren gerne telefonisch.
              </Modal.Body>
              <Modal.Footer>
                <Button variant={"primary"} onClick={() => this.setState({ modalIsOpen: false })}>Bestätigen</Button>
              </Modal.Footer>
            </Modal>
            <Switch>
              <Route path="/list">
                <NotImplementedYet />
              </Route>
              <Route path="/faq">
                <FrequentlyAskedQuestions />
              </Route>
              <Route path="/corona">
                <CoronaQuestions />
              </Route>
              <Route path="/datenschutz">
                <Privacy />
              </Route>
              <Route path="/impressum">
                <Imprint />
              </Route>
              <Route path="/">
                <Map markers={this.state.markers} selectedPlace={this.state.selectedPlace} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
