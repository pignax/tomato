import React, { Component } from 'react';
import logo from './logo.svg';
import CSSModules from 'react-css-modules';
import style from './App_Test.css';

class Scritta extends Component {
  render() {
    return (
      <div className={style.App3}>
        Una Scritta
      </div>
    );
  }
}

export default CSSModules(Scritta, style);
