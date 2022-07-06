import React, { PureComponent } from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import GreenChainLoader from '../common/greenchain-loader';

export default class GreenChainContainer extends PureComponent {
  render() {
    const { children, blocking, ...otherProps } = this.props;
    return (
      <BlockUi tag="div" blocking={blocking} loader={<GreenChainLoader />} {...otherProps}>
        {children}
      </BlockUi>
    );
  }
}
