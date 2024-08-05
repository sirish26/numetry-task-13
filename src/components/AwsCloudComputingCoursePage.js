import React from 'react';

const AwsCloudComputingCoursePage = () => {
  return (
    <div className='course-page-container fade-in'>
      <h1>Cloud Computing with AWS</h1>
      <p>
        Our AWS cloud computing tutorial covers all aspects of cloud computing using Amazon Web Services (AWS). Learn to deploy and manage scalable applications on the cloud with AWS.
      </p>

      <div className="course-details-container">
        <div className="course-details">
          <div className="headers-container">
            <span className="selected-header"><b>Details</b></span>
          </div>
          <div className="details-container">
            <h2>Details</h2>
            <ul>
              <p>4.7 Rating</p>
              <p>14,563 Students</p>
              <p>Placement Assistance</p>
              <p>8 Weeks, 2 hrs/day (flexible schedule)</p>
              <p>Certificate of Training from Internshala Trainings</p>
            </ul>
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

export default AwsCloudComputingCoursePage;
