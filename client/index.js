import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

// Import our reducers
import index from './reducers/index'
import App from './components/App'
import './index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(index,
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
  // render(
  //   <Provider store={store}>
  //     <App />
  //   </Provider>,
  //   document.getElementById('app')
  // )
})
