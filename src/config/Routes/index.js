import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Home, Hook, Lifecycle, Login } from "../../pages";
import {Home, Hook, Lifecycle, Login} from "../../pages";

const Routess = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hook" element={<Hook />} />
        <Route path="/lifecycle" element={<Lifecycle />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Routess;
