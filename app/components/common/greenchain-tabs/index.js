import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import withStyles from '@material-ui/core/styles/withStyles';
import { styles } from './styles';
import { GREENCHAIN_NETWORK } from '../../../../lib/constants/networks';

class GreenChainTabs extends Component {
  render() {
    const {
      value,
      onChange,
      classes,
      labels,
      parent,
      colortheme,
      network,
      ...otherProps
    } = this.props;
    return (
      <Tabs
        value={value}
        onChange={onChange}
        TabIndicatorProps={{
          style: {
            display: 'none',
          },
        }}
        classes={{
          root:
            parent === 'home'
              ? classes.tabsRootHome
              : network.value === GREENCHAIN_NETWORK.value
                  ? classes.tabsRootAccountMainnet
                  : null,
          indicator: classes.tabsIndicator,
        }}
        {...otherProps}
      >
        {labels.map(label => (
          <Tab
            key={label}
            disableRipple
            classes={{
              root:
                parent === 'home'
                  ? network.value === GREENCHAIN_NETWORK.value
                      ? classes.tabRootHomeMainnet
                      : null
                  : network.value === GREENCHAIN_NETWORK.value
                      ? classes.tabRootAccountMainnet
                      : null,
              selected: parent === 'home' ? classes.tabSelected : classes.tabSelected,
            }}
            label={label}
          />
        ))}
      </Tabs>
    );
  }
}

export default withStyles(styles)(GreenChainTabs);
