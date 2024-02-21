import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="773954154675-dmqkib7qnrvq5creobcbkstsa41jrtj2.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
