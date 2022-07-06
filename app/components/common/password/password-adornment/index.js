import React, { Component } from 'react';
import GreenChainInputAdornment from '../../greenchain-input-adornment';
import IconContainer from '../../icon-container';
import PasswordVisibility from '../password-visibility';

export default class PasswordAdornment extends Component {
  render() {
    const {
      onClick, showPassword, showColor, hideColor, ...otherProps
    } = this.props;
    return (
      <GreenChainInputAdornment {...otherProps}>
        <IconContainer aria-label="Toggle password visibility" onClick={onClick}>
          <PasswordVisibility
            showPassword={showPassword}
            showColor={showColor}
            hideColor={hideColor}
          />
        </IconContainer>
      </GreenChainInputAdornment>
    );
  }
}
