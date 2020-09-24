import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Exercicios JavaScript</h1>
          <small>Tiago Dias</small>
        </div>

        <ul>
          <li>
            <Link to="/ex1">Exercicio 1</Link>
          </li>
          <li>
            <Link to="ex2">Exercicios 2</Link>
          </li>
          <li>ex 1</li>
          <li>ex 1</li>
        </ul>
      </div>
    );
  }
}

export default Main;
