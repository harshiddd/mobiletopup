
import React from 'react';

const PlanCard = ({ plan }) => {
  return (
    <div className="plan-card">
      <h2>{plan.name}</h2>
      <p>{plan.description}</p>
      <p>Price: ${plan.price}</p>
    </div>
  );
};

export default PlanCard;
