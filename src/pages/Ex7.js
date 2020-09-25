import React, { Component } from 'react';

import BackButton from '../components/BackButton';

class Ex7 extends Component {
  state = {
    mostrarResultado: false,
    votos: {
      candidato1: 0,
      candidato2: 0,
      nulo: 0,
      branco: 0,
    },

    resultado: {
      totalVotos: 0,
      candidato1: 0,
      candidato2: 0,
      nulo: 0,
      branco: 0,
    },
  };

  incrementarVoto = (voto) => {
    const votos = this.state.votos;

    votos[voto] += 1;

    this.setState({
      votos,
    });
  };

  calcularResultadoEMostrar = () => {
    const { votos } = this.state;
    const resultado = {};

    const totalVotos =
      votos.candidato1 + votos.candidato2 + votos.nulo + votos.branco;

    for (let voto in votos) {
      resultado[voto] = ((votos[voto] / totalVotos) * 100).toFixed(1);
    }

    resultado.totalVotos = totalVotos;

    this.setState({
      resultado,
      mostrarResultado: true,
    });
  };

  render() {
    const { mostrarResultado, votos, resultado } = this.state;

    return (
      <div style={{ marginBottom: `30px` }} className="container">
        <BackButton />

        <div className="title">
          <h1>Exercício 7 - JavaScript</h1>
          <small>Tiago Dias</small>
        </div>

        <div className="ex-container">
          <h3>
            7. Em uma eleição presidencial existem dois candidatos. Os votos são
            informados através de códigos. Os dados utilizados para a contagem
            dos votos têm-se a seguinte codificação: 1,2 = voto para os
            respectivos candidatos; 3= voto nulo; 4= voto em branco; Elabore um
            script que leia o código do candidato em um voto. Calcule e escreva:
            (1) percentual de votos para cada candidato; (2) percentual de votos
            nulos; (3) percentual de votos em branco;
          </h3>

          <div className="buttons">
            <div className="button-row">
              <button
                onClick={() => {
                  this.incrementarVoto('candidato1');
                }}
                className="vote-button"
              >
                Votar no Candidato 1
              </button>
              <span>Quantidade atual: {votos.candidato1}</span>
            </div>

            <div className="button-row">
              <button
                onClick={() => {
                  this.incrementarVoto('candidato2');
                }}
                className="vote-button"
              >
                Votar no Candidato 2
              </button>
              <span>Quantidade atual: {votos.candidato2}</span>
            </div>
            <div className="button-row">
              <button
                onClick={() => {
                  this.incrementarVoto('nulo');
                }}
                className="vote-button"
              >
                Votar Nulo
              </button>
              <span>Quantidade atual: {votos.nulo}</span>
            </div>
            <div className="button-row">
              <button
                onClick={() => {
                  this.incrementarVoto('branco');
                }}
                className="vote-button"
              >
                Votar em branco
              </button>
              <span>Quantidade atual: {votos.branco}</span>
            </div>
          </div>

          {mostrarResultado && (
            <div className="resultado">
              <h3>Total de Votos: {resultado.totalVotos}</h3>
              <h3>
                Percentual de Votos do Candidato 1: {resultado.candidato1}%
              </h3>
              <h3>
                Percentual de Votos do Candidato 2: {resultado.candidato2}%
              </h3>
              <h3>Percentual de Votos Nulos: {resultado.nulo}%</h3>
              <h3>Percentual de Votos em branco: {resultado.branco}%</h3>
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

export default Ex7;
