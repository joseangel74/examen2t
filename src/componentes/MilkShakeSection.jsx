import React, { useState } from 'react';
import MilkShakeCard from './MilkShakeCard';
import './MilkShakeSection.css';

const MilkShakeSection = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const milkshakes = [
    {
      id: 1,
      title: "Crunchy Butterscotch",
      description: "Butterscotch & Cashews",
      price: "Bs 18",
    },
    {
      id: 2,
      title: "Supermans Secret",
      description: "Peanut Butter . Dry fruit . With Vanilla Ice Cream",
      price: "Bs 21",
    },
    {
      id: 3,
      title: "Wonder Woman Shake",
      description: "Saffron . With Vanilla Ice Cream",
      price: "Bs 19",
    },
  ];

  return (
    <section className="milkshake-section">
      <h2 className={`title ${isVisible ? 'active' : ''}`} onClick={toggleVisibility}>Milk Shakes</h2>
      {isVisible && milkshakes.map((milkshake) => (
        <MilkShakeCard key={milkshake.id} milkshake={milkshake} />
      ))}
    </section>
  );
};

export default MilkShakeSection;