import React, { Component } from 'react';

import BackButton from '../components/BackButton';

class Ex1 extends Component {
  state = {
    peso: '',
    altura: '',
  };

  handleInputPeso = (event) => {
    this.setState({
      peso: event.target.value,
    });
  };

  handleInputAltura = (event) => {
    this.setState({
      altura: event.target.value,
    });
  };

  calcularImcEMostrarResultado = () => {
    const { peso, altura } = this.state;
  };

  render() {
    const { peso, altura } = this.state;

    return (
      <div className="container">
        <BackButton />

        <div className="title">
          <h1>Exercicio 1 - JavaScript</h1>
          <small>Tiago Dias</small>
        </div>

        <div className="ex-container">
          <h3>
            1. Elabore um script que solicite o peso e a altura de uma
            determinada pessoa. Após a digitação, exibir se esta pessoa está ou
            não com seu peso ideal.
          </h3>

          <div className="inputs">
            <div className="input-group">
              <label htmlFor="peso">Peso</label>
              <input
                placeholder="0"
                value={peso}
                onChange={this.handleInputPeso}
                type="number"
                id="peso"
              />
            </div>
            <div className="input-group">
              <label htmlFor="altura">Altura</label>
              <input
                placeholder="0"
                value={altura}
                onChange={this.handleInputAltura}
                type="number"
                id="altura"
              />
            </div>
          </div>

          <div className="final-actions">
            <button onClick={this.calcularImcEMostrarResultado}>
              Calcular
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Ex1;
