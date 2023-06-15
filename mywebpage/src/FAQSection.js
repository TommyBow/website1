import React, { useState } from 'react';

const FAQSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-section">
      <h2>FAQ'S</h2>
      <div className="faq">
        <h3>
          How do I receive the program?
          <button onClick={toggleContent}>{isOpen ? '-' : '+'}</button>
        </h3>
        {isOpen && <p>Once payment has been made you will receive an email with all details related to your program.</p>}
      </div>
      <div className="faq">
        <h3>
          Do you have any beginner programs?
          <button onClick={toggleContent}>{isOpen ? '-' : '+'}</button>
        </h3>
        {isOpen && <p>Yes, programs are tailored to your needs and goals. So if you are a beginner I’ve got you covered.</p>}
      </div>
    </div>
  );
};

export default FAQSection;
