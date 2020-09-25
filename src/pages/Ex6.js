import React, { Component } from 'react';

import BackButton from '../components/BackButton';

class Ex6 extends Component {
  state = {
    numeros: [],
  };

  componentDidMount() {
    const numeros = [];

    for (let i = 1; i <= 500; i++) {
      if (i % 5 == 0) {
        numeros.push(i);
      }
    }

    this.setState({
      numeros,
    });
  }

  render() {
    const { numeros } = this.state;

    return (
      <div style={{ marginBottom: `30px` }} className="container">
        <BackButton />

        <div className="title">
          <h1>Exercício 6 - JavaScript</h1>
          <small>Tiago Dias</small>
        </div>

        <div className="ex-container">
          <h3>
            6. Escreva um script que escreva todos os números múltiplos de 5, no
            intervalo de 1 a 500.
          </h3>

          <div className="resultado">
            <h3>{numeros.map((numero) => numero * numero).join(', ')}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Ex6;
