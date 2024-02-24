
import React, { useState } from 'react';


import AddP from './Addplan/addP';

import PlansPage from './Addplan/planpage';

const Recharge = () => {
  const [plans, setPlans] = useState([]);

  const handlePlanAdded = (newPlan) => {
    setPlans([...plans, newPlan]);
  };

  return (
    <>
    <div>
      
      <PlansPage plans={plans} />
    </div>
    </>
  );
};

export default Recharge;
