import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classnames from 'classnames';
import { Circle } from 'react-feather';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import GreenChainContainer from '../greenchain-container';
import Header from '../common/header/header.component';
import ViewSelector from '../view-selector';
import Network from '../network/network';
import Options from '../options';
import { NetworkDisconnectionIcon } from '../common/icon';
import './styles.css';
import { CHINESE } from '../../constants/language';
import ValidatePasswordModal from '../validate-password/modal';
import FontMedium from '../common/fonts/font-medium';
import { colortheme } from '../../../lib/constants/colors';

export default class GreenChainApp extends Component {
  render() {
    const {
      account,
      page,
      changePage,
      isLoading,
      networks,
      network,
      onNetworkChange,
      showLogo,
      showBanner,
      showNetwork,
      isConnected,
      isOfflineMode,
      showSettings,
      showHeader,
      showGrayHeader,
      showUserId,
      onLogoClick,
      onCopyAddress,
      options,
      onOptionsChange,
      isDeveloperMode,
      onToggleDeveloperMode,
      language,
      t,
      ...otherProps
    } = this.props;

    const GreenChainHeaderClassNames = classnames({
      'greenchain-header': showHeader,
      'greenchain-header-banner': showHeader && showBanner && !showLogo && !showNetwork && !showUserId,
      'greenchain-header-boarded': showHeader && !showBanner && showLogo && showNetwork && showUserId,
      'greenchain-header-gray': showHeader && showGrayHeader,
      'display-none': !showHeader,
    });

    const GreenChainNetworkClassNames = classnames({
      'greenchain-network': showNetwork,
      // 'display-none': false,
    });
    const GreenChainNetworkDisClassNames = classnames({
      'display-none': isConnected,
      'greenchain-network-status': !isConnected,
    });
    const GreenChainSettingsClassNames = classnames({
      'greenchain-settings': showSettings,
      'display-none': !showSettings,
    });
    const GreenChainUserIdClassNames = classnames({
      'greenchain-settings': showUserId,
      'display-none': !showUserId,
    });
    const GreenChainConfigClassNames = classnames({
      'greenchain-config': (showNetwork && showSettings) || (showNetwork && showUserId),
      'display-none': showBanner || !showNetwork,
    });
    console.log('network', network);
    return (
      <GreenChainContainer blocking={isLoading}>
        <div {...otherProps}>
          <Header
            page={page}
            className={GreenChainHeaderClassNames}
            style={{ background: colortheme[network.value].background }}
          >
            {/* <div className="greenchain-row">
              <GreenChainLogo className="greenchain-logo" />
              <div className="greenchain-header-text">GreenChain Wallet</div>
            </div> */}
            <div className={GreenChainConfigClassNames}>
              {!isOfflineMode && (
                <>
                  <NetworkDisconnectionIcon
                    title="Network unavailable"
                    className={GreenChainNetworkDisClassNames}
                    colortheme={colortheme[network.value]}
                  />
                  <Network
                    networks={networks}
                    network={network}
                    onNetworkChange={onNetworkChange}
                    className={GreenChainNetworkClassNames}
                    page={page}
                    style={{ border: `1px solid ${colortheme[network.value].border}` }}
                    colortheme={colortheme[network.value]}
                  />
                </>
              )}
              {isOfflineMode && (
                <>
                  <Circle size={8} color="#999999" />
                  <span
                    style={{
                      fontSize: 14,
                      color: '#999999',
                      padding: '0 8px',
                    }}
                  >
                    {t('Offline')}
                  </span>
                </>
              )}
              <Options
                onToggleDeveloperMode={onToggleDeveloperMode}
                className={GreenChainSettingsClassNames}
                isDeveloperMode={isDeveloperMode}
                page={page}
                changePage={changePage}
                menuWidth={language === CHINESE ? 120 : 170}
                colortheme={colortheme[network.value]}
                {...otherProps}
              />
              <CopyToClipboard text={account ? account.address : ''}>
                <FontMedium
                  className={GreenChainUserIdClassNames}
                  text={account ? account.alias : ''}
                  page={page}
                  onClick={onCopyAddress}
                  colortheme={colortheme[network.value]}
                />
              </CopyToClipboard>
            </div>
          </Header>
          <ViewSelector page={page} />
          <ToastContainer />
          <ValidatePasswordModal />
        </div>
      </GreenChainContainer>
    );
  }
}
