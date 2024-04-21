import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFoud";
import Home from "./pages/Home";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}
function RegisterAndLogout() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  return <Navigate to="/register" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register-and-logout" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
