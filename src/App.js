import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Main from "./Screen/Main";
import Example from "./Screen/Example";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Reducers from "./Store";
import Login from "./Screen/Login";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const store = configureStore({ reducer: Reducers });

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      navigate("/admin/main");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="overflow-hidden">
      <Provider store={store}>
        {isAuthenticated ? (
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/admin/main" element={<Main />} />
              <Route path="/ex" element={<Example />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AnimatePresence>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </Provider>
    </div>
  );
}

export default App;
