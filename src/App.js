import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Game from './Game'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/game" component={Game} />
              {/*<Route path="/scores" component={Duo} /> */}
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
