import { UPDATE_TOKEN_LIST } from '../actions/greenchain-tokens';

const initialState = {
  tokens: [], // all tokens
};

// {
//   network, accountAddr, address, tokenName, tokenSymble, balance
// }

const greenchainTokensState = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN_LIST:
      return {
        tokens: action.payload,
      };
    default:
      return state;
  }
};

export default greenchainTokensState;
