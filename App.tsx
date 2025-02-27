import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import StartBusiness from './pages/StartBusiness';
import BusinessSetup from './pages/BusinessSetup';
import FinancialPlanning from './pages/FinancialPlanning';
import LearningHub from './pages/LearningHub';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/start-business" element={<StartBusiness />} />
            <Route path="/business-setup/:sector/:model" element={<BusinessSetup />} />
            <Route path="/financial-planning" element={<FinancialPlanning />} />
            <Route path="/learning-hub" element={<LearningHub />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;