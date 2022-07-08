import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import GreenChainUnlockPassword from '../../components/common/password/greenchain-unlock-password';
import FontRegular from '../../components/common/fonts/font-regular';
import FooterButton from '../../components/common/footer-button';
import LogoBig from '../../images/greenchain-logo-big.svg';
import { colortheme } from '../../../lib/constants/colors';
import { GREENCHAIN_NETWORK } from '../../../lib/constants/networks';
import './styles.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      isError: false,
      errorText: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.error) {
      return {
        isError: true,
        errorText: props.error.message,
      };
    }
    return state;
  }

  componentDidUpdate() {
    if (this.props.success) {
      this.props.onBoard();
    }
  }

  handleOnChange = prop => e => {
    const { value } = e.target;
    this.setState({
      [prop]: value,
    });
  };

  handleClick = () => {
    const { unlockGreenChain } = this.props;
    const { password } = this.state;
    unlockGreenChain(password);
  };

  render() {
    const { isError, password, errorText } = this.state;
    const { t, network } = this.props;
    return (
      <div>
        <div
          className="sign-in-container"
          onKeyPress={e => {
            if (e.key === 'Enter') {
              this.handleClick();
            }
          }}
          style={{ background: colortheme[network.value].background }}
        >
          <div className="sign-in-img-contianer">
            <img src={network.value === GREENCHAIN_NETWORK.value ? LogoBig : LogoBig} alt="logo2" />
          </div>
          <FontRegular
            className="sign-in-title"
            text="Green Carbon Neutral Blockchain"
            style={{ color: colortheme[network.value].text.primary }}
          />
          <div className="sign-in-container-password">
            <GreenChainUnlockPassword
              isError={isError}
              errorText={errorText}
              className="sign-in-password-container"
              onChange={this.handleOnChange}
              password={password}
              placeholder={t('Password')}
              handleUnlock={this.handleClick}
              colortheme={colortheme[network.value]}
            />
          </div>

          {/* {isError ? (
            <span className="error-msg">{t(errorText)}</span>
          ) : (
            <span className="place-holder"> </span>
          )} */}
          <FooterButton onClick={this.handleClick} name={t('Unlock')} custom />
        </div>
      </div>
    );
  }
}

export default withTranslation()(SignIn);

SignIn.defaultProps = {
  unlockGreenChain: undefined,
};

SignIn.propTypes = {
  unlockGreenChain: PropTypes.func,
};
