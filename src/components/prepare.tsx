

/*
  No createSlice, podemos dividir o reducer em 2 metodos,
  *reducer* e *prepare*. O prepare é utilizado para preparar o 
  objeto criado pela ação. Só é possível retornar através do prepare,
  as propriedades { payload, meta, error }.

*/

import { createSlice } from "@reduxjs/toolkit";

// Isso e substituido pelo prepare
function somar(payload) {
  return { type: 'SUM', payload: payload, meta: 'LocalStorage', };
}

const slice = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    somar: {
      reducer: (state, action) => state + action.payload,
      // O prepare adiciona meta dados no objeto da action
      prepare(payload) {
        return {payload, meta: 'localStorage', error: null}
      }
    }
  }
})