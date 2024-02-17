import React from "react";
import Home from "./pages/Home/Home";
import { IDProvider } from "./context/IDContext";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <IDProvider>
      <ToastContainer />
      <Home />
    </IDProvider>
  );
};

export default App;
