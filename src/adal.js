import { AdalConfig, AuthenticationContext } from 'react-adal';

export const clientId = '';

export const adalConfig: AdalConfig = {
  clientId,
  endpoints: {
    api: 'login.microsoftonline.com'
  },
  cacheLocation: 'localStorage',
  postLogoutRedirectUri: window.location.origin,

};
export const authContext = new AuthenticationContext(adalConfig);

export const getToken = () => authContext.getCachedToken(adalConfig.clientId);
