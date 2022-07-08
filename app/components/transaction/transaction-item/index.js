import React, { Component } from 'react';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import SendIcon from '../../../images/send-icon.png';
import TransactionItemDetails from '../transaction-item-details';
import { DAPP } from '../../../../lib/constants/transaction';
import './styles.css';

export default class TransactionItem extends Component {
  render() {
    const {
      transaction, network, colortheme, account, ...otherProps
    } = this.props;
    console.log('TransactionItem', account, transaction);

    return (
      <div>
        {transaction.status !== DAPP ? (
          <a
            // href={`${network.transactionUrl}${transaction.txnHash}`}
            // target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            {transaction.metadata.account.address === account.address ? (
              <div {...otherProps}>
                <CallMadeIcon
                  className="transfer-item-icon"
                  style={{ color: colortheme.text.primary }}
                />
                <TransactionItemDetails
                  amount={`Sent ${transaction.metadata.amount} ${transaction.metadata.unit.text}`}
                  address={transaction.to}
                  moment={transaction.modifiedDate}
                  colortheme={colortheme}
                />
              </div>
            ) : (
              <div {...otherProps}>
                <CallReceivedIcon
                  className="transfer-item-icon"
                  style={{ color: colortheme.text.primary }}
                />
                <TransactionItemDetails
                  amount={`Received ${transaction.metadata.amount} ${transaction.metadata.unit.text}`}
                  address={transaction.from}
                  moment={transaction.modifiedDate}
                  colortheme={colortheme}
                />
              </div>
            )}
          </a>
        ) : (
          <div {...otherProps}>
            <CallMadeIcon
              className="transfer-item-icon"
              style={{ color: colortheme.text.primary }}
            />
            <TransactionItemDetails
              amount={transaction.transferAmount}
              address={transaction.metadata.to}
              moment={transaction.modifiedDate}
              status={transaction.status}
              color={transaction.color}
              colortheme={colortheme}
            />
          </div>
        )}
      </div>
    );
  }
}
