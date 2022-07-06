import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { ChevronDown } from 'react-feather';
import GreenChainMenu from '../../common/greenchain-menu';
import FontRegular from '../../common/fonts/font-regular';
import { DISABLE_NETWORKS_PAGES_GROUP } from '../../../constants/navigation';
// import { shortenName } from '../../../services/wallet-service';
import './styles.css';
import { GREENCHAIN_NETWORK } from '../../../../lib/constants/networks';

class Network extends Component {
  state = {
    anchorEl: null,
  };

  render() {
    const { anchorEl } = this.state;
    const {
      networks, network, onNetworkChange, colortheme, t
    } = this.props;
    return (
      <div>
        <div className="network-text-container">
          <FontRegular
            className="network-text"
            text={t(network.value === GREENCHAIN_NETWORK.value ? GREENCHAIN_NETWORK.text : network.text)}
            style={{ color: colortheme.text.secondary }}
          />
        </div>
      </div>
    );
  }
}

export default withTranslation()(Network);
