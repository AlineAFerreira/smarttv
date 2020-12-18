import React from 'react'
import createSagaMiddleware from 'redux-saga'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './core/redux'
import App from './App'
import rootSaga from './core/redux/sagas'
import Login from './pages/login'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
)