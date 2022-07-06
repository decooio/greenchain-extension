
export const UPDATE_TOKEN_LIST = 'GREENCHAIN_TOKENS/UPDATE_LIST';

export function updateTokenList(tokens) {
  return {
    type: UPDATE_TOKEN_LIST,
    payload: tokens,
  };
}
