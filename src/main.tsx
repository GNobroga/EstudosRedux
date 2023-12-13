import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import { Provider } from 'react-redux';
// import { Action, createStore, Reducer } from 'redux';


/**
  @Provider - Prove a store pra toda aplicacao.
 */

//const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')!).render(
//  <Provider store={store}>
//     <App />
//  </Provider>,
  <App/>
)
