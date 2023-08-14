import {createContext} from 'react';

const EmailContext = createContext({
  email: null,
  setEmail: () => {},
});

export default EmailContext;