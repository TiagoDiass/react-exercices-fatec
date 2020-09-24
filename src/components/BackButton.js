import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BackButton extends Component {
  render() {
    return (
      <Link className="back-button" to="/">
        Voltar
      </Link>
    );
  }
}

export default BackButton;
