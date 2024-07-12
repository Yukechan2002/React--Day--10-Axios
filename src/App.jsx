import React from "react";
import "./App.css";
import Create from "./components/Create";
import Update from "./components/Update";
import Read from "./components/Read";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="main">
        <h1>Axios CRUD Operation</h1>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
          <Route path="/" element={<Read />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
