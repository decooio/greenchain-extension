import { keccak512 } from 'js-sha3';
import * as APITypes from '../../api';
import * as SignInActionTypes from './action-types';
import * as APIConstants from '../../../lib/constants/api';
import { updateAppLoading } from '../../containers/actions';
import { promiseTimeout } from '../../utils/helper';

const unlockGreenChainSuccess = () => ({
  type: SignInActionTypes.UNLOCK_GREENCHAIN_SUCCESS,
});

const unlockGreenChainError = error => ({
  type: SignInActionTypes.UNLOCK_GREENCHAIN_ERROR,
  error,
});

const clearUnlockError = () => ({
  type: SignInActionTypes.UNLOCK_GREENCHAIN_ERROR,
  error: undefined,
});

export const unlockGreenChainSuccessFalse = () => ({
  type: SignInActionTypes.UNLOCK_GREENCHAIN_SUCCESS_FALSE,
});

export const unlockGreenChain = password => async dispatch => {
  if (password === '') {
    const error = {};
    error.message = 'Password is required.';
    dispatch(unlockGreenChainError(error));
  } else {
    try {
      dispatch(updateAppLoading(true));
      const ret = await promiseTimeout(
        5000,
        APITypes.OnBoarding.setHashKey(keccak512(password)),
        false,
      );
      if (ret.result === false) {
        throw new Error('Time out.');
      }
      dispatch(clearUnlockError());
      dispatch(unlockGreenChainSuccess());
    } catch (e) {
      dispatch(updateAppLoading(false));
      const error = {
        message: 'Password is incorrect.',
        stack: e.stack || {},
      };
      dispatch(unlockGreenChainError(error));
    }
  }
};
