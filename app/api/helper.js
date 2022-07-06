import * as Constants from '../../lib/constants/api';

const GreenChainException = (message, status) => {
  const error = new Error(message);
  error.code = status;
  return error;
};

export const throwIfNoSuccess = ({ message, status }) => {
  if (status !== Constants.SUCCESS) {
    throw GreenChainException(message, status);
  }
};
