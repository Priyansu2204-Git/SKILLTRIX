
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider, useApp } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Career from "./pages/Career";
import Dashboard from "./pages/Dashboard";

const ProtectedRoute = ({ children }) => {
  const { token } = useApp();
  return token ? children : <Navigate to="/" replace />;
};

const AppContent = () => {
  const { token } = useApp();
  
  return (
    <Router>
      <div className="font-sans text-gray-800 bg-white">
        {!token && <Navbar />}
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/career" element={<Career />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
        {!token && <Footer />}
      </div>
    </Router>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;


