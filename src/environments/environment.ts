export const environment = {
  production: false,
  baseUrl: window.location.hostname === 'localhost'
    ? 'http://localhost:9015/cribbage'
    : `http://${window.location.hostname}:9015/cribbage`

};
