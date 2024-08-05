import React, { useState, useEffect, useRef } from 'react';

const predefinedQA = [
  { question: "Trending courses?", answer: "Our trending courses are Java, JavaScript, and MongoDB." },
  { question: "How to enroll?", answer: "You can enroll by clicking on the 'Enroll Now' button on the course page." },
  { question: "Course duration?", answer: "The duration varies, but most courses last between 4 to 12 weeks." },
  { question: "Contact support?", answer: "Please mail us at support@example.com for more help." }
];

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    setMessages([{ sender: 'bot', text: 'Hi! I am a bot. How can I help you?' }]);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleQuestionClick = (question) => {
    const foundQA = predefinedQA.find(qa => qa.question === question);
    if (foundQA) {
      const userMessage = { sender: 'user', text: question };
      const botMessage = { sender: 'bot', text: foundQA.answer };
      setMessages(prevMessages => [...prevMessages, userMessage, botMessage]);
    }
  };

  const handleGoBackClick = () => {
    setMessages([{ sender: 'bot', text: 'Hi! I am a bot. How can I help you?' }]);
  };

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    const foundQA = predefinedQA.find(qa => input.toLowerCase().includes(qa.question.toLowerCase()));

    let botMessage;
    if (foundQA) {
      botMessage = { sender: 'bot', text: foundQA.answer };
    } else {
      botMessage = { sender: 'bot', text: "I'm sorry, I don't understand that. Please mail us at support@example.com for more help." };
    }

    setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: "... " }]);
    setTimeout(() => {
      setMessages(prevMessages => prevMessages.slice(0, -1).concat(botMessage));
    }, 1000);

    setInput('');
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-icon" onClick={() => setIsOpen(!isOpen)}>
        👋🏻
      </div>
      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-header">
            Chatbot
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="chatbot-messages" ref={chatContainerRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-options">
            {predefinedQA.map((qa, i) => (
              <div key={i} className="chatbot-option" onClick={() => handleQuestionClick(qa.question)}>
                {qa.question}
              </div>
            ))}
            <div className="chatbot-option" onClick={handleGoBackClick}>
              Go Back
            </div>
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
