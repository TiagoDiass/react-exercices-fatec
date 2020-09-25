import React, { Component } from 'react';
import BackButton from '../components/BackButton';

class Ex4 extends Component {
  state = {
    numeroHoras: '',
    salarioMinimo: '',
  };

  handleInputSalarioMinimo = (event) => {
    this.setState({
      salarioMinimo: event.target.value,
    });
  };

  handleInputNumeroHoras = (event) => {
    this.setState({
      numeroHoras: event.target.value,
    });
  };

  calcularResultadoEMostrar = () => {
    const { salarioMinimo, numeroHoras } = this.state;

    let horaTrabalhada = salarioMinimo / 2;
    let salarioBruto = numeroHoras * horaTrabalhada;

    let imposto = salarioBruto * 0.03;

    let resultado = salarioBruto - imposto;

    this.setState({
      resultado,
    });
  };

  render() {
    const { salarioMinimo, numeroHoras, resultado } = this.state;

    return (
      <div className="container">
        <BackButton />

        <div className="title">
          <h1>Exercício 4 - JavaScript</h1>
          <small>Tiago Dias</small>
        </div>

        <div className="ex-container">
          <h3>
            4. Faça um programa em JavaScript que receba o número de horas
            trabalhadas e o valor do salário mínimo. Calcule e mostre o salário
            a receber seguindo as regras abaixo:
            <br />
            a. A hora trabalhada vale a metade do salário mínimo;
            <br />
            b. O salário bruto equivale ao número de horas trabalhadas
            multiplicado pelo valor da hora trabalhada;
            <br />
            c. O imposto equivale a 3% do salário bruto;
            <br />
            d. O salário a receber equivale ao salário bruto menos o imposto.
          </h3>

          <div className="inputs">
            <div className="input-group">
              <label htmlFor="salarioMinimo">Salário mínimo</label>
              <input
                onChange={this.handleInputSalarioMinimo}
                value={salarioMinimo}
                placeholder="0"
                type="number"
                id="salarioMinimo"
              />
            </div>
            <div className="input-group">
              <label htmlFor="numeroHoras">Número de horas trabalhadas</label>
              <input
                onChange={this.handleInputNumeroHoras}
                value={numeroHoras}
                placeholder="0"
                type="number"
                id="numeroHoras"
              />
            </div>
          </div>

          {resultado && (
            <div className="resultado">
              <h2>Seu salário será R$ {resultado.toFixed(2)}</h2>
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

export default Ex4;
