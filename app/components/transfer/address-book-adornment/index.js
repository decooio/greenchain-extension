import React, { Component } from 'react';
import ListAltIcon from '@material-ui/icons/ListAlt';
import GreenChainInputAdornment from '../../common/greenchain-input-adornment';
import IconContainer from '../../common/icon-container';

export default class AddressBookAdornment extends Component {
  render() {
    const { onClick, colortheme, ...otherProps } = this.props;
    return (
      <GreenChainInputAdornment {...otherProps}>
        <IconContainer aria-label="Toggle password visibility" onClick={onClick}>
          {/* <AddressBook /> */}
          <ListAltIcon style={{ color: colortheme.text.secondary }} />
        </IconContainer>
      </GreenChainInputAdornment>
    );
  }
}
