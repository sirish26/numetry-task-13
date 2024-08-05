import React, { useState } from 'react';

const Footer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const message = formData.get('message');

    // Check if email and message are filled
    if (email.trim() !== '' && message.trim() !== '') {
      // Display message sent popup
      setIsSubmitted(true);
    } else {
      alert('Please fill in both email and message fields.');
    }
  };

  return (
    <footer className="footer fade-in">
      <hr />
      <h2>Contact Us</h2>
      <section className="map-and-form">
        <div className="map-section">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.696029199863!2d77.59456251482444!3d12.971598490892951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670d1ee75dd%3A0xb3c662e44eb68b88!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1620757115684!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="message-form">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" cols="50" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
      <div className="footer-content">
        <div className="footer-section about" id="about">
          <h3>About Us</h3>
          <p>We are a learning platform dedicated to helping you achieve your educational goals.</p>
        </div>
        <div className="footer-section contact" id="contact">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: <a href="mailto:contact@example.com">contact@example.com</a></li>
            <li>Phone: <a href="tel:+11234567890">+1 123-456-7890</a></li>
            <li>Address: 123 Main St, banglore, india</li>
          </ul>
        </div>
        <div className="footer-section links">
          <h3>Useful Links</h3>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      {isSubmitted && (
        <div className="popup">
          <div className="popup-content">
            <p>Your query has been received. Please allow us up to 48 to 72 hours to respond to your query..</p>
            <button onClick={() => setIsSubmitted(false)}>Close</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
