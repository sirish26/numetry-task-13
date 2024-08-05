import React, { useState } from 'react';


const JavaCoursePage = () => {
  const [selectedHeader, setSelectedHeader] = useState('Course Details');

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
  };

  return (
    <div className='course-page-container fade-in'>
      <h1>Online Core Java Course</h1>
      <p>
        Learn Object Oriented Programming and GUI Programming, and build industry-grade
        projects.
      </p>

      <div className="course-details-container">
        <div className="course-details">
          <div className="headers-container">
            <span className={selectedHeader === 'Course Details'} onClick={() => handleHeaderClick('Course Details')}><b>Details</b></span>
            <span className={selectedHeader === 'Course Highlights'} onClick={() => handleHeaderClick('Course Highlights')}><b>Highlights</b></span>
            <span className={selectedHeader === 'Why Learn Core Java?'} onClick={() => handleHeaderClick('Why Learn Core Java?')}><b>Why Learn Core Java?</b></span>
            <span className={selectedHeader === 'Core Java Training Syllabus'} onClick={() => handleHeaderClick('Core Java Training Syllabus')}><b>Syllabus</b></span>
            <span className={selectedHeader === 'Course Certification and Placement Assistance'} onClick={() => handleHeaderClick('Course Certification and Placement Assistance')}><b>Certification & Placement Assistance</b></span>
          </div>
          <div className="details-container">
            {selectedHeader && (
              <>
                <h2>{selectedHeader}</h2>
                {selectedHeader === 'Course Details' && (
                  <ul>
                    <p>4.3 Rating</p>
                    <p>26,537 Students</p>
                    <p>Placement Assistance</p>
                    <p>8 Weeks, 1 hr/day (flexible schedule)</p>
                    <p>
                      1+1 Offer: Get Internship & Job Preparation training FREE on purchase of Core Java
                      training!
                    </p>
                  </ul>
                )}
                {selectedHeader === 'Course Highlights' && (
                  <ul>
                    <p>Learn online at your own schedule</p>
                    <p>Mobile friendly</p>
                    <p>No laptop required - Mobile friendly</p>
                    <p>Certificate of Training from Internshala Trainings</p>
                  </ul>
                )}
                {selectedHeader === 'Why Learn Core Java?' && (
                  <p>
                    Java is the backbone of innovation! By mastering Core Java, you'll gain skills highly
                    sought after by employers worldwide. Lucrative opportunities await with Java expertise!
                  </p>
                )}
                {selectedHeader === 'Core Java Training Syllabus' && (
                  <ul>
                    <p>Java Introduction and Installation</p>
                    <p>Java Programming Fundamentals</p>
                    <p>Object Oriented Programming</p>
                    <p>Advanced Java Topics</p>
                    <p>Database Handpng using Java</p>
                    <p>GUI Programming</p>
                  </ul>
                )}
                {selectedHeader === 'Course Certification and Placement Assistance' && (
                  <p>
                    Upon successful completion, you'll receive an NSDC certificate and gain access to placement
                    assistance, including code review, debugging, and more!
                  </p>
                )}
              </>
            )}
          </div>
        </div>
        <div className="enrollment-form">
          <form>
            <label>Email Id:</label>
            <input type="email" placeholder="john@example.com" required />
            <br />
            <label>First Name:</label>
            <input type="text" placeholder="John" required />
            <br />
            <label>Last Name:</label>
            <input type="text" placeholder="Doe" />
            <br />
            <label>Mobile Number:</label>
            <input type="tel" placeholder="+91" required />
            <br />
            <label>Choose batch:</label>
            <select required>
              <option value="1">select</option>
              <option value="2">3 months</option>
              <option value="3">6 months</option>
            </select>
            <br />
            <button type="submit">Enroll Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JavaCoursePage;
