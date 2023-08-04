// imports
import { Routes, Route } from "react-router-dom";

// pages
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
};

export default App;
