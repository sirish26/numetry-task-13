import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState({
    courses: false,
    technologies: false,
  });
  const [sidebarOpen, setSidebarOpen] = useState(false); 

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientX <= 50) {
        setSidebarOpen(true);
      } else if (e.clientX > 250) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="close-btn">
        {sidebarOpen ? 'Close' : 'Open'}
      </button>
      <ul>
        <li>
          <div onClick={() => toggleSection('courses')} className="section-heading">
            Courses <span>{isOpen.courses ? '▲' : '▼'}</span>
          </div>
          {isOpen.courses && (
            <ul className="sub-menu">
              <li><Link to="/java">Java</Link></li>
              <li><Link to="/cplusplus">C ++</Link></li>
             
            </ul>
          )}
        </li>
        <li>
          <br />
          <div onClick={() => toggleSection('technologies')} className="section-heading">
            Technologies <span>{isOpen.technologies ? '▲' : '▼'}</span>
          </div>
          {isOpen.technologies && (
            <ul className="sub-menu">
              <li><Link to="/tech1">Technology 1</Link></li>
              <li><Link to="/tech2">Technology 2</Link></li>
           
            </ul>
          )}
        </li>
        <li>
          <br />
          <div onClick={() => toggleSection('subjects')} className="section-heading">
            Subjects <span>{isOpen.subjects ? '▲' : '▼'}</span>
          </div>
          {isOpen.subjects && (
            <ul className="sub-menu">
              <li><Link to="/tech1">reactjs</Link></li>
              <li><Link to="/tech2">nodejs</Link></li>
              <li><Link to="/tech1">python</Link></li>
              <li><Link to="/tech2">mongodb</Link></li>
           
            </ul>
          )}
        </li>
        <li>
          <br />
          <div onClick={() => toggleSection('contact')} className="section-heading">
            Contact Us <span>{isOpen.contact ? '▲' : '▼'}</span>
          </div>
          {isOpen.contact && (
            <ul className="sub-menu">
              <li><Link to="/tech1">Email</Link></li>
              <li><Link to="/tech2">address</Link></li>
           
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
