import { configureStore, createSlice, getDefaultMiddleware } from "@reduxjs/toolkit";

// Criando uma function pra fazer requisicoes assincronas e usar as actions
// Por padrao o reduxjs ja vem com um Thunk pra injetar o dispatch 
// o Dispatch retorna o objeto que action retorna
const slice = createSlice({
  name: 'FETCH',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
    },
    fetchError(state, action) {
      state.error = action.payload;
      state.data = null;
      state.loading = false;
    }
  }
});

const { fetchStarted, fetchSuccess, fetchError, } = slice.actions;
const reducer = slice.reducer;

// O Redux injeta o dispatch o getState
const fetchToken = user => async dispatch => {
  try {
    dispatch(fetchStarted());
  } catch (e) {
    dispatch(fetchError(e));
  }
};

const store = configureStore({ reducer, });

// DOC Js, isso nao deve ser usado com Typescript porque TS ja faz isso.

/**
 * Funcao para somar algo
 * @param {Array} args
 * @returns {Number} 
 */
function sum(...args) {
  return args.reduce((total, value) => total + value, 0);
}
