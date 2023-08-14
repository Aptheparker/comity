// imports
import { Routes, Route } from "react-router-dom";

// pages
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";

// context
import EmailContext from "./context/email-context";

const App = () => {
  return (
    <EmailContext.Provider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </EmailContext.Provider>
  );
};

export default App;
