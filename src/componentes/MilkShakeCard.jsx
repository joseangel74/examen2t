import React from 'react';
import CardInfo from './CardInfo';
import AddButton from './AddButton';
import './MilkShakeCard.css';

const MilkShakeCard = ({ milkshake }) => {
  return (
    <div className="milkshake-card">
      <CardInfo title={milkshake.title} description={milkshake.description} price={milkshake.price} />
      <AddButton />
    </div>
  );
};

export default MilkShakeCard;