import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import openSocket from 'socket.io-client'
import {updateLeader} from './actions'

const  socket = openSocket('https://minions-game.herokuapp.com')

const middleware = [ thunk ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

socket.on('updatedLeader', result => {
  store.dispatch(updateLeader(result))
})

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root'));
registerServiceWorker();
