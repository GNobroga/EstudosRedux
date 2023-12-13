import React from 'react';
import { connect } from 'react-redux';

// Forma Antiga 
function Connect({ counter, dispatch }) {
  return <h1 onClick={() => dispatch({ type: 'INCREMENT', })}>Contador { counter }</h1>;
}

// Serve pra mapear o estado pra props do componente
const mapStateToProps = (state) => {
  return { counter: state, };
};

// Serve pra mapear as actions para a props do componente
// Ele some com a funcao dispatch quando so tem o mapStateToProps 
// Ele adiciona a action como funcao pra acionar
const mapDispatchToProps = {
  increment: () => ({ type: 'INCREMENT', }),
}

// Serve pra mapear o estado pra props do componente
export default connect(mapStateToProps, mapDispatchToProps)(Connect);