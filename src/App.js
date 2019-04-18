import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './composants/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              {/*<Route path="/game" component={Solo} />*/}
              {/*<Route path="/scores" component={Duo} /> */}
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
