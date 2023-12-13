import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
import Connect from './components/Connect';

/**
  @useSelector - Serve para pegar o estado que eu quero, diferente de usar o store.getState()
  @useDispatch - Serve pra disparar um action
 */

function App () {
  const state = useSelector((count: number) => count);
  const dispatch = useDispatch();

  return <div>
   
  </div>
}

export default App;