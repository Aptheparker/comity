// EmailContext.js
import React, { createContext, useState } from "react";

const EmailContext = createContext();

export function EmailProvider({ children }) {
  const [email, setEmail] = useState(""); // Initial state is an empty string

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
}

export default EmailContext;
