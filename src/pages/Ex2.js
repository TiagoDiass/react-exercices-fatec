import React, { Component } from 'react';
import BackButton from '../components/BackButton';

class Ex2 extends Component {
  state = {
    idade: '',
    resultado: '',
  };

  handleInputIdade = (event) => {
    this.setState({
      idade: event.target.value,
    });
  };

  calcularResultadoEMostrar = () => {
    const { idade } = this.state;
    let resultado;

    if (idade >= 5 && idade <= 7) {
      resultado = 'Infantil A, de 5 a 7 anos';
    } else if (idade >= 8 && idade <= 10) {
      resultado = 'Infantil B, de 8 a 10 anos';
    } else if (idade >= 11 && idade <= 13) {
      resultado = 'Juvênil A, de 11 a 13 anos';
    } else if (idade >= 14 && idade <= 17) {
      resultado = 'Juvênil B, de 14 a 17 anos';
    } else if (idade > 17) {
      resultado = 'Sênior, maior de 17 anos';
    } else {
      resultado = 'Indisponível';
    }

    this.setState({
      resultado,
    });
  };

  render() {
    const { idade, resultado } = this.state;

    return (
      <div className="container">
        <BackButton />

        <div className="title">
          <h1>Exercício 2 - JavaScript</h1>
          <small>Tiago Dias</small>
        </div>

        <div className="ex-container">
          <h3>
            2. Elaborar um script em que dada a idade de um nadador,
            classifique-o em uma das seguintes categorias: infantil A (de 5 a 7
            anos), infantil B (de 8 a 10 anos), juvenil A (de 11 a 13 anos),
            juvenil B (14 a 17 anos) e senior (maior que 17 anos)
          </h3>

          <div className="inputs">
            <div className="input-group w-50">
              <label htmlFor="idade">Idade</label>
              <input
                onChange={this.handleInputIdade}
                value={idade}
                placeholder="0"
                type="number"
                id="idade"
              />
            </div>
          </div>

          {resultado && (
            <div className="resultado">
              <h2>Sua classificação é: {resultado}</h2>
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

export default Ex2;
