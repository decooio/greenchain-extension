const AppConfig = {
  scheduleTimeout: 5000,
  scheduleNetworkCheck: 10000,
  marketDataApiUrl: 'https://api.coingecko.com/api/v3/coins',
  touVersion: 2,
  tokenID: 'dot',
  serialVersion: 2,
  name: 'greenchain wallet',
  version: '1.0.1',
  isProd: process.env.NODE_ENV === 'production',
};

export default AppConfig;
