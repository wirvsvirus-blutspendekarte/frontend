import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './MenuBar';
import NotImplementedYet from './NotImplementedYet';
import Map from './Map';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import CoronaQuestions from "./CoronaQuestions";

function App() {
  return (
    <div className="App">
      <Router>
        <MenuBar />
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
              <NotImplementedYet />
            </Route>
            <Route path="/impressum">
              <NotImplementedYet />
            </Route>
            <Route path="/">
              <Map />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
