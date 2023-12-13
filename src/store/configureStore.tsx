import { 
  configureStore, 
  createAction, 
  createSlice, 
  combineReducers,
  getDefaultMiddleware
 } from "@reduxjs/toolkit";

/**
 * @createAction 
 * facilita na criacao de uma action creator
*/
export const increment = createAction('INCREMENT');

/**
  * @createSlice
  * E um shorthand pra criar reducer e actions de uma vez so, alem de configurar o immer por padrao. Ele e muito bom pra deixar tudo organizado
  * pois cria os reducers, o estado, tudo em um unico objeto.
 */
const slice = createSlice({
  name: 'contador',
  initialState: { total: 0},
  reducers: {
    increment(state){ // Implementar o immer por padrao
      state.total++;
    }
  }
});

// Exportando as actions criadas com slice
//export const { increment } = slice.actions;

// Exportando o reducer criado com o slice
//export default slice.reducer;

export const counter = (state: number = 0, action) => {
  switch(action.type) {
    case 'INCREMENT': return state + 1;
    default: return state;
  }
}

// O configureStore, configura de forma mais eficiente e direta a criacao de uma store 
// Diferente do createStore
const store = configureStore({ reducer: counter });


/**
 * @combineReducers
 *  Se eu tiver mais de 1 reducer eu posso usar o combineReducers pra
 * passar para a store.
 */

const combineReducer = combineReducers({
  counter1: slice.reducer,
  counter2: counter,
})
const store2 = configureStore({ reducer: combineReducer });

/**
 * @Middleware
 * 
 * Por padrao o @reduxjs/toolkit ja traz uns middlewares padrao e para que
 * os meus funcionem e necessario passar esses middlewares padrao
 * 
 * @getDefaultMiddleware - Serve pra obter os middlewares padrao
 * 
 * Lembre-se middleware serve para interceptar disparo de actions.
 */

const myMiddleware = store => next => action => {
  console.log('Hello World');
  return next(action);
};

const store3 = configureStore({ reducer: combineReducer, middleware: [...getDefaultMiddleware(), myMiddleware] });

export default store;

