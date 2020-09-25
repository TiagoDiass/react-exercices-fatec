import React, { Component } from 'react';

import BackButton from '../components/BackButton';

class Ex5 extends Component {
  state = {
    numeros: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ],
  };

  render() {
    const { numeros } = this.state;

    return (
      <div className="container">
        <BackButton />

        <div className="title">
          <h1>Exercício 5 - JavaScript</h1>
          <small>Tiago Dias</small>
        </div>

        <div className="ex-container">
          <h3>
            5. Escreva um script que mostre o quadrado dos números inteiros no
            intervalo de 1 a 20.
          </h3>

          <div className="resultado">
            <h3>{numeros.map((numero) => numero * numero).join(', ')}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Ex5;
