import React, { Component } from 'react';
import Logo from '../../../images/greenchain-logo-big.svg';

export default class GreenChainLogo extends Component {
  render() {
    const { ...otherProps } = this.props;
    return <img src={Logo} {...otherProps} alt="logo" />;
  }
}
