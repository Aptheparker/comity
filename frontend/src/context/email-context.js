import { useState, createContext } from "react";

const EmailContext = createContext({
  email: null,
  setEmail: () => {},
});

export const EmailContextProvider = ({ children }) => {
  const [email, setEmail] = useState(null);

  const setEmailValue = (newEmail) => {
    setEmail(newEmail);
  };

  return (
    <EmailContext.Provider value={{ email, setEmail: setEmailValue }}>
      {children}
    </EmailContext.Provider>
  );
};

export default EmailContext
