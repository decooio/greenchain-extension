import { getStore } from '../../store/store-provider';

export const getGreenChainTokens = () => {
  const {
    curstTokensState: { tokens },
  } = getStore().getState();
  return tokens;
};
