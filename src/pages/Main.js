import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Exercícios JavaScript</h1>
          <small>Tiago Dias</small>
        </div>

        <ul>
          <li>
            <a
              href="https://github.com/TiagoDiass/react-exercices-fatec"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clique aqui para ver o código fonte
            </a>
          </li>
          <li>
            <Link to="/ex1">Exercício 1</Link>
          </li>
          <li>
            <Link to="/ex2">Exercício 2</Link>
          </li>
          <li>
            <Link to="/ex3">Exercício 3</Link>
          </li>
          <li>
            <Link to="/ex4">Exercício 4</Link>
          </li>
          <li>ex 1</li>
          <li>ex 1</li>
        </ul>
      </div>
    );
  }
}

export default Main;
