import React from 'react'
import createSagaMiddleware from 'redux-saga'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './core/redux'
import rootSaga from './core/redux/sagas'
import SplashScreen from './components/SplashScreen'
import GlobalStyle from './styles';


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(rootSaga)

render(
  <>
  <GlobalStyle />
  <SplashScreen />
  </>,

  document.getElementById('root')
)