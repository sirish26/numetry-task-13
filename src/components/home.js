import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="scrolling-text">
        <h4>🚀 Welcome to our technology courses portal! Enroll now and kickstart your career in tech! 🚀 | Important Message: Our new courses for Full Stack Development, Data Science, and Machine Learning are now live! Enroll today to get early bird discounts. Don't miss our upcoming webinars on Cloud Computing and Cybersecurity. Stay tuned for more updates on our latest courses and workshops. Visit our website for more details. Join our community forum for discussions and networking with industry experts and peers. Sign up now to get access to exclusive content and resources. Thank you for being a part of our learning community!</h4>
      </div>
      <div className='footer-gap'>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231110115359/Roadmap-to-Mern-stack-developer-copy-(3).webp" alt="Roadmap to MERN Stack Developer" />  
      </div>
      <div className="scroll-container">
        <img src="https://prepinsta.com/wp-content/themes/prepinsta-2020/images/social/zoho.webp" alt="zoho" />
        <img src="https://prepinsta.com/wp-content/themes/prepinsta-2020/images/social/accnture.webp" alt="accnture" />
        <img src="https://prepinsta.com/wp-content/themes/prepinsta-2020/images/social/bosch.webp" alt="bosch" />
        <img src="https://prepinsta.com/wp-content/themes/prepinsta-2020/images/social/garageplug.webp" alt="garageplug" />
        <img src="https://prepinsta.com/wp-content/themes/prepinsta-2020/images/social/google.webp" alt="google" />
        <img src="https://prepinsta.com/wp-content/themes/prepinsta-2020/images/social/infosys.webp" alt="infosys" />
        <img src="https://prepinsta.com/wp-content/themes/prepinsta-2020/images/social/kpmg.webp" alt="kpmg" />
        <img src="https://prepinsta.com/wp-content/themes/prepinsta-2020/images/social/mindtree.webp" alt="mindtree" />
        <img src="https://prepinsta.com/wp-content/themes/prepinsta-2020/images/social/persistent.webp" alt="persistent" />
        <img src="https://prepinsta.com/wp-content/themes/prepinsta-2020/images/social/simlilearn.webp" alt="simlilearn" />
        <img src="https://prepinsta.com/wp-content/themes/prepinsta-2020/images/social/texas.webp" alt="texas" />
        <img src="https://prepinsta.com/wp-content/themes/prepinsta-2020/images/social/upgrad.webp" alt="upgrad" />
        <img src="https://prepinsta.com/wp-content/themes/prepinsta-2020/images/social/whatfix.webp" alt="whatfix" />
      </div>
      <h1><center>Choose a Learning Path</center></h1>
      <div className="home-container">
        <div className="grid-container">
          <div className="grid-item grid-item-1">
            <h2>Companies</h2>
            <img src="https://prepinsta.com/wp-content/themes/prepinsta-2020/images/social/brand-logos.webp" alt="Company 1 Logo" />
            <p>Prepare for companies like Cisco, Amazon, TCS, Google with Company specific courses</p>
            <button>view all companies</button>
          </div>
          <div className="grid-item grid-item-2">
            <h2>Aptitude</h2>
            <p>Learn Aptitude from basic to pro</p>
            <button>Get Started</button>
          </div>
          <div className="grid-item grid-item-3">
            <h2>Subjects</h2>
            <p>Prepare for CS Subjects and excel in your chosen field.</p>
            <button>Get Started</button>
          </div>
          <div className="grid-item grid-item-4">
            <h2>Programming</h2>
            <p>Learn and become a pro in programming</p>
            <button>Get Started</button>
          </div>
          <div className="grid-item grid-item-5">
            <h2>Code Editor</h2>
            <p>With our online code editor, you can edit code and view the result in your browser</p>
            <button>Get Started</button>
          </div>
          <div className="grid-item grid-item-6">
            <h2>Interview</h2>
            <p>HR, Puzzles, Group Discussion, Interview Experiences and more ...</p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
