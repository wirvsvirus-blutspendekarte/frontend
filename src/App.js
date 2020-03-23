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


var markers = [];


class App extends React.Component {

  componentWillMount() {
    this.fetchData();
    this.state = {
      markers: [],
      selectedPlace: null
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
