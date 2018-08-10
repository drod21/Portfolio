import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/home';
import About from './views/about';
import Contact from './views/contact';
import Portfolio from './views/portfolio';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path='/portfolio' component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default App;
