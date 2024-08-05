import React, { useState } from 'react';
import axios from 'axios';

const TechnologiesPage = ({ isHome }) => {
  const [bookmarked, setBookmarked] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTech, setSelectedTech] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    otp: '',
    verified: false,
  });
  const [message, setMessage] = useState('');

  const technologies = [
    {
      id: 1,
      name: 'React Js',
      description: 'A JavaScript library for building user interfaces.',
      imageUrl: 'https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/react.png',
    },
    {
      id: 2,
      name: 'Node Js',
      description: "A JavaScript runtime built on Chrome's V8 JavaScript.",
      imageUrl: 'https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/nodejs.png',
    },
    {
      id: 3,
      name: 'Python',
      description: 'A general-purpose programming language.',
      imageUrl: 'https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/python.png',
    },
    {
      id: 4,
      name: 'Angular Js',
      description: 'A minimalist web framework for Node.js.',
      imageUrl: 'https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/angular.png',
    },
    {
      id: 5,
      name:'Advance Excel',
      description:'Learn Excel formulas, data visualization & more',
      imageUrl: 'https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/excel.png?v=1',
    },
    {
      id: 6,
      name: 'SQl for Data Analytics',
      description: 'Want to extract, analyze, or filter data for an analysis?',
      imageUrl: 'https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/sql-data-analytics.png?v=1',
    },
    {
      id: 7,
      name: 'VLSI design',
      description: 'Learn about different VLSI tools and HDL coding concepts',
      imageUrl: 'https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/vlsi-design.png?v=1',
    }
  ];

  const handleKnowMoreClick = (techName) => {
    const selectedTech = technologies.find((tech) => tech.name === techName);
    setSelectedTech(selectedTech);
    setShowPopup(true);
  };

  const handleBookmarkClick = (tech) => {
    const isBookmarked = bookmarked[tech.id];
    setBookmarked({ ...bookmarked, [tech.id]: !isBookmarked });
    console.log(`${isBookmarked ? 'Unbookmarked' : 'Bookmarked'}: ${tech.name}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const displayMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  const handleSendOTP = () => {
    const phoneWithCountryCode = `+91${userData.phone}`;
    axios.post('http://localhost:3001/send-otp', { phone: phoneWithCountryCode })
      .then(response => {
        if (response.data.success) {
          displayMessage('OTP sent successfully!');
        } else {
          displayMessage('Failed to send OTP. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error sending OTP:', error);
        displayMessage('Failed to send OTP. Please try again later.');
      });
  };

  const handleVerifyOTP = () => {
    const phoneWithCountryCode = `+91${userData.phone}`;
    axios.post('http://localhost:3001/verify-otp', { otp: userData.otp, phone: phoneWithCountryCode })
      .then(response => {
        if (response.data.success) {
          setUserData({ ...userData, verified: true });
          displayMessage('OTP verification successful!');
        } else {
          displayMessage('Invalid OTP. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error verifying OTP:', error);
        displayMessage('Failed to verify OTP. Please try again later.');
      });
  };

  const handleEnroll = () => {
    if (userData.verified) {
      window.location.href = `/${selectedTech.name.toLowerCase()}`;
      displayMessage(`Successfully enrolled in ${selectedTech.name}`);
    } else {
      displayMessage('Please verify OTP first.');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="technologies-container fade-in">
      <h2>Technologies</h2>
      <div className="technology-cards">
        {technologies.map((tech) => (
          <div className="technology-card" key={tech.id}>
            <div className="tech-top">
              <img src={tech.imageUrl} alt={tech.name} />
            </div>
            <div className="tech-bottom">
              <h3>{tech.name}</h3>
              <span>{tech.description}</span>
              <div className="action-buttons">
                <div className="bookmark" onClick={() => handleBookmarkClick(tech)}>
                  {bookmarked[tech.id] ? '★' : '☆'}
                </div>
                <div className="know-more" onClick={() => handleKnowMoreClick(tech.name)}>
                  Enroll Now
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
          <button className="close" onClick={handleClosePopup}>X</button>
            <img src={selectedTech.imageUrl} alt={selectedTech.name} />
            <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleInputChange} />
            <input type="tel" name="phone" placeholder="Phone" value={userData.phone} onChange={handleInputChange} />
            <div className="resend-otp" onClick={handleSendOTP}>Verify Number</div>
            <input type="text" name="otp" placeholder="Enter OTP" value={userData.otp} onChange={handleInputChange} />
            <div className="resend-otp" onClick={handleSendOTP}>Resend</div>
            {!userData.verified ? (
              <button onClick={handleVerifyOTP}>Verify OTP</button>
            ) : (
              <button onClick={handleEnroll}>Enroll Now</button>
            )}
            
          </div>
        </div>
      )}
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default TechnologiesPage;
