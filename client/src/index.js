import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import MainReducer from './reducers'

// let middleware =[ ReduxThunk ]

// if(process.env.NODE_ENV!=='production'){
  // show store activity in console log for debugging purpose
  // const ReduxLogger = require('redux-logger')
  // middleware = [...middleware, ReduxLogger.logger]
// }

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={process.env.NODE_ENV==='production'? createStoreWithMiddleware(MainReducer) : createStoreWithMiddleware(MainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
