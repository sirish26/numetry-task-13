import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Courses from './components/Cards';
import JavaCoursePage from './components/javacourse';
import CPlusPlusCoursePage from './components/CPlusplusCoursePage';
import AwsCloudComputingCoursePage from './components/AwsCloudComputingCoursePage';
import PythonPage from './components/PythonPage';
import ReactPage from './components/ReactPage';
import NodePage from './components/Nodepage';
import AngularPage from './components/Angularpage';
import TechnologiesPage from './components/Technologies';
import Popup from './components/popup'; 
import ChatWidget from './components/chatwidget';
import LoginSignup from './components/LoginSignup'; 
import Sidebar from './components/sidebar';
import './App.css';

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem('hasVisited', 'true');
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);



  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={
            <>
            <Home />
            <AboutUs />
              <ChatWidget />
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/java" element={<JavaCoursePage />} />
          <Route path="/cplusplus" element={<CPlusPlusCoursePage />} />
          <Route path="/awscloudcomputing" element={<AwsCloudComputingCoursePage/>} />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="/python" element={<PythonPage />} />
          <Route path="/react Js" element={<ReactPage />} />
          <Route path="/node Js" element={<NodePage />} />
          <Route path="/angular Js" element={<AngularPage />} />
          <Route path="/cards" element={<Courses />} />
          <Route path="/login" element={<LoginSignup />} /> 
        </Routes>
        <div className='footer-gap'>
        
        </div>
        <Footer />
        {showPopup && <Popup closePopup={closePopup} />}
      </div>
    </Router>
  );
};

export default App;
