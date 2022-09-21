import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import RoadmapPage from "./pages/RoadmapPage";
import PrivateRoute from "./components/PrivateRoute";
import "react-toastify/dist/ReactToastify.css";
import "./css/main.css";
import AddFeedback from "./pages/AddFeedback";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/add-feedback" element={<AddFeedback />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
