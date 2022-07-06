import React, { Component } from 'react';
import PasswordAdornment from '../password-adornment';
import GreenChainInput from '../../greenchain-input';

const showColor = {
  color: '#666F83',
};

const hideColor = {
  color: '#666F83',
};

export default class GreenChainPassword extends Component {
  state = {
    showPassword: false,
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const {
      classes,
      children,
      onChange,
      isError,
      password,
      className,
      handleClickShowPassword,
      colortheme,
      border,
      ...otherProps
    } = this.props;
    const { showPassword } = this.state;
    return (
      <div className={className}>
        <GreenChainInput
          {...otherProps}
          className={className}
          error={isError}
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={onChange('password')}
          colortheme={colortheme}
          style={{
            background: colortheme.card,
            border: border ? `1px solid ${colortheme.border}` : null,
            borderRadius: 8,
          }}
          endAdornment={
            <PasswordAdornment
              position="end"
              onClick={this.handleClickShowPassword}
              showPassword={showPassword}
              showColor={showColor}
              hideColor={hideColor}
            />
          }
        />
      </div>
    );
  }
}
