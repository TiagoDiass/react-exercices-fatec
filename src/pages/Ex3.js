import React, { Component } from 'react';
import BackButton from '../components/BackButton';

class Ex3 extends Component {
  state = {
    salario: '',
    resultado: '',
  };

  handleInputSalario = (event) => {
    this.setState({
      salario: event.target.value,
    });
  };

  calcularResultadoEMostrar = () => {
    const { salario } = this.state;
    let resultado;

    if (salario < 1000) {
      resultado = salario * 1.15;
    } else if (salario >= 1000 && salario <= 1500) {
      resultado = salario * 1.1;
    } else {
      resultado = salario * 1.05;
    }

    this.setState({
      resultado,
    });
  };

  render() {
    const { salario, resultado } = this.state;

    return (
      <div className="container">
        <BackButton />

        <div className="title">
          <h1>Exercício 3 - JavaScript</h1>
          <small>Tiago Dias</small>
        </div>

        <div className="ex-container">
          <h3>
            3. Construa um script que calcule o novo salário de um funcionário.
            Considere que o funcionário deverá receber um reajuste de 15% caso
            seu salário seja menor que 1000. Se o salário for maior ou igual a
            1000, mas menor ou igual a 1500, o reajuste deve ser de 10%. Caso o
            salário seja maior que 1500, o reajuste deve ser de 5%.
          </h3>

          <div className="inputs">
            <div className="input-group w-50">
              <label htmlFor="salario">Salário</label>
              <input
                onChange={this.handleInputSalario}
                value={salario}
                placeholder="0"
                type="number"
                id="salario"
              />
            </div>
          </div>

          {resultado && (
            <div className="resultado">
              <h2>Seu novo salário será R$ {resultado.toFixed(2)}</h2>
            </div>
          )}

          <div className="final-actions">
            <button onClick={this.calcularResultadoEMostrar}>CALCULAR</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Ex3;
