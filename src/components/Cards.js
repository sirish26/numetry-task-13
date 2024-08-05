import React from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();

  const handleKnowMoreClick = (courseName) => {
    window.scrollTo(0, 0); 
    navigate(`/${courseName}`); 
  };

  return (
    <div>
      <h2>Courses</h2>
      <div className="cards-container fade-in">
        <div className="card ">
          <div className="card-image">
            <img src="https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/java.png" alt="Core Java course" />
          </div>
          <div className="card-content">
            <h2> Core JAVA</h2>
            <p>
              Our core Java programming tutorial is designed for students and working professionals. Java is an object-oriented, class-based, concurrent, secured, and general-purpose computer-programming language. It is a widely used robust technology.
            </p>
            <button className="know-more-btn" onClick={() => handleKnowMoreClick('java')}>Know More</button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src="https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/c-plus-plus.png" alt="C++ Programming course" />
          </div>
          <div className="card-content">
            <h2>Programming with C and C++</h2>
            <p>
              Our C and C++ programming tutorial is designed for beginners and professionals alike. C++ is a powerful language for system programming and has wide applications in software development.
            </p>
            <button className="know-more-btn" onClick={() => handleKnowMoreClick('cplusplus')}>Know More</button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src="https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/aws-cloud-computing.png" alt="AWS Cloud Computing course" />
          </div>
          <div className="card-content">
            <h2>Cloud Computing with AWS</h2>
            <p>
              Our AWS cloud computing tutorial covers all aspects of cloud computing using Amazon Web Services (AWS). Learn to deploy and manage scalable applications on the cloud with AWS.
            </p>
            <button className="know-more-btn" onClick={() => handleKnowMoreClick('awscloudcomputing')}>Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
