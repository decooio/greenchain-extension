import React, { Component } from 'react';
import { Loader } from 'react-loaders';
import 'loaders.css/loaders.min.css';

export default class GreenChainLoader extends Component {
  render() {
    return <Loader active type="ball-spin-fade-loader" color="#FF8212" />;
  }
}
