import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Layout from "./Layout/Layout";
import LoginPage from "./LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import RegisterPage from "./LoginPage/RegisterPage";
function App() {
  return (
    <div className="bg-black text-white">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/login"
          element={<Layout Component={LoginPage} />}
        ></Route>
        <Route
          path="/register"
          element={<Layout Component={RegisterPage} />}
        ></Route>
    
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
