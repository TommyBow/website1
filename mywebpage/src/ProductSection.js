import React from 'react';

// The ProductSection component displays the membership options
const ProductSection = ({ membershipOptions }) => {
  return (
    <div className="product-section">
      {membershipOptions.map((option, index) => (
        <div className="product" key={index}>
          <h3>{option.title}</h3>
          <h5 className="price">{option.price}</h5>
          <ul>
            {option.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button>Get Started</button>
        </div>
      ))}
    </div>
  );
}

export default ProductSection;
