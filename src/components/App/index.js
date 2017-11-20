import React, { Component } from 'react'
import Topbar from '../Topbar'
import Sidebar from '../Sidebar'
import Overview from '../Overview'
import Salesmen from '../Salesmen'
import Update from '../Update'
import {Route, Redirect} from 'react-router-dom'
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <Topbar />
        </header>
        
        <nav>
          <Sidebar />
        </nav>

        <main>
          <Route exact path="/overview" component={Overview}/>
          <Route exact path="/update" component={Update}/>
          <Route exact path="/salesmen" component={Salesmen}/>
          <Route exact path="/" component={Salesmen}/>
        </main>
      </div>
    );
  }
}

export default App;
