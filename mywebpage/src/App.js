import React from 'react';
import './App.css';
import backgroundImage from './exercise-weights-iron-dumbbell-with-extra-plates.jpg';
import phoneImage from './phone.jpg';
import Footer from './Footer';
import FAQSection from './FAQSection';
import ProductSection from './ProductSection';

const App = () => {
  //Defined the membership options 
  const membershipOptions = [
    {
      title: '3 Month Membership',
      price: 'R2200.00',
      features: [
        'Custom training programs',
        'Personalized Meal plan',
        'Video Demonstrations',
        'Fitness Log',
        'Progress Log',
        'Weekly Check Ins',
        'Community w/ like-minded individuals',
        'In-App Communication and Online Support'
      ]
    },
    {
      title: 'Monthly Membership',
      price: 'R799.99',
      features: [
        'Custom training programs',
        'Personalized Meal plan',
        'Video Demonstrations',
        'Fitness Log',
        'Progress Log',
        'Weekly Check Ins',
        'Community w/ like-minded individuals',
        'In-App Communication and Online Support'
      ]
    }
  ];

  return (
    <div className="container">
      <header>
        <p>Join now for as little as R26 a day</p>
      </header>
      <div className="background-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="content-wrapper">
          <h1>Thomas Cane Fitness</h1>
          <button>Train with me</button>
        </div>
      </div>
       {/*Added a membership section where you have a option to choose a once off payment option  */}
      <h2 className='h2'>BECOME A MEMBER</h2>

      {/*This line passes the membershipOptions array as a prop to the ProductSection component. */}
      <ProductSection membershipOptions={membershipOptions} />
      <div className="content-section">
        <img src={phoneImage} alt="Two phones" />
        <div className="content">
          <h2>Shape Your Mind And Body</h2>
          <p className=''>
            It's more than just working on your body, it's about working on your
            mind, having the right mindset will help you stay consistent and
            motivated throughout the process.
            <br />
            Thomas Cane Fitness was created to help you gain a better
            understanding of what your body needs to feel and perform at its best.
            In order to achieve this, you need a structured program tailored to
            your needs that allows you to plan, eat, and train towards your goals
            effectively. Motivation will only bring you so far, in the end,
            building strong healthy habits is what will help you stay consistent
            and reach your goals.
            <br />
            It’s never too late to make a difference!
          </p>
        </div>
      </div>
       {/*Added a membership section where you have a option to choose a once off payment option  */}
      <h2 className='h2'>BECOME A MEMBER</h2>

      {/*This line passes the membershipOptions array as a prop to the ProductSection component. */}
      <ProductSection membershipOptions={membershipOptions} />
      <div className='group'>
        <h3 className='Gh3'>+JOIN A LIKE MINDED COMMUNITY </h3>
        <p className='P'>Join a community of individuals who share similar fitness goals and values, where you can receive valuable feedback, ask questions, and celebrate your progress together.</p>
      </div>
      {/*Added a frequently asked question section*/}
      <FAQSection />
       {/*Added a footer with the link to the recreated website*/}
      <Footer />
    </div>
  );
}

export default App;
