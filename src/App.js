import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from './views/home';
import { About } from './views/about';
import { Contact } from './views/contact';
import { Portfolio } from './views/portfolio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path='/portfolio' component={Portfolio} />
        </Router>
      </div>
    );
  }
}

export default App;
