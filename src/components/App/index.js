import React, { Component } from 'react'
import Topbar from '../Topbar'
import Sidebar from '../Sidebar'
import Overview from '../Overview'
import Salesmen from '../Salesmen'
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
          {<Redirect from="/" to="salesmen" />}
          <Route path="/salesmen" component={Salesmen}/>
          <Route path="/overview" component={Overview}/>
        </main>
      </div>
    );
  }
}

export default App;
