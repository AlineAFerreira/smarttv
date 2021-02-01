import React from 'react'
import createSagaMiddleware from 'redux-saga'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './core/redux'
import App from './App'
import rootSaga from './core/redux/sagas'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(rootSaga)

render(
<<<<<<< HEAD
  <Provider store={store}>
    <App />
  </Provider>,
=======
  <>
  <GlobalStyle />
  <SplashScreen />
  </>,

>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
  document.getElementById('root')
)