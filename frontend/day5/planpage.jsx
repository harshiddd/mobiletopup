// src/pages/PlansPage.jsx
import React from 'react';
import PlanCard from './plancard';


const PlansPage = ({ plans }) => {
  return (
    <div>
      <h1>Plans Page</h1>
      {plans.map((plan) => (
        <PlanCard key={plan.name} plan={plan} />
      ))}
    </div>
  );
};

export default PlansPage;
