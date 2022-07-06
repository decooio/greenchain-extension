import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { withTranslation } from 'react-i18next';
import GreenChainExpansionPanel from '../../common/greenchain-expansion-panel';
import FontRegular from '../../common/fonts/font-regular';
import KeyPairItemCard from '../../common/key-pair-item-card';

class CreateAccountAdvancedConfig extends Component {
  render() {
    const {
      classes,
      keypairType,
      keypairTypes,
      onKeypairTypeChange,
      disableAccountSettings,
      colortheme,
      t,
      ...otherProps
    } = this.props;
    return (
      <div {...otherProps}>
        <GreenChainExpansionPanel
          disabled={disableAccountSettings}
          title={t('Advanced')}
          colortheme={colortheme}
        >
          <FontRegular
            text={t('Keypair Crypto Type')}
            style={{
              fontSize: 14,
              fontWeight: 'bolder',
              margin: '14px 0px 14px 0px',
              color: colortheme ? colortheme.text.primary : null,
            }}
          />
          <List style={{ display: 'flex', marginTop: '-25px' }}>
            {keypairTypes.map((option, index) => (
              <KeyPairItemCard
                listItem={option}
                handleListItemAvatarClick={onKeypairTypeChange}
                handleListItemClick={onKeypairTypeChange}
                primaryText={option.text}
                isActive={keypairType.value === option.value}
                className="key-pair-card-container"
                colortheme={colortheme}
                key={index}
              />
            ))}
          </List>
          {/* <GreenChainRadioButtonGroup
            options={keypairTypes}
            value={keypairType}
            onChange={onKeypairTypeChange}
            disabled={disableAccountSettings}
          /> */}
        </GreenChainExpansionPanel>
      </div>
    );
  }
}

export default withTranslation()(CreateAccountAdvancedConfig);
