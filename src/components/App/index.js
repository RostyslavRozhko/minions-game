import React, { Component } from 'react'
import Topbar from '../Topbar'
import Salesmen from '../Salesmen'
import Update from '../Update'
import {Route} from 'react-router-dom'
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <Topbar />
        </header>

          <main>
            <Route exact path="/update" component={Update}/>
            <Route exact path="/" component={Salesmen}/>
            <Route exact path="/salesmen" component={Salesmen}/>
          </main>
      </div>
    );
  }
}

export default App;
