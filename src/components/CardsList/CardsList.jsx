import { useState } from 'react';

import { NewCard } from '../NewCard/NewCard';
import { Card } from '../Card/Card';
import { Modal } from '../Modal/Modal';

import classes from './CardsList.module.css';

const NAMES = [
  { name: 'Alex Astrautsou', role: 'react developer' },
  { name: 'Kurt Cobain', role: 'rock musician' },
];

export const CardsList = ({ isPosting, finishPosting }) => {
  const [names, setNames] = useState(NAMES);

  const setNewCard = (newCard) => {
    finishPosting();

    if (newCard.name || newCard.role) {
      setNames((prevState) => [...prevState, { ...newCard }]);
    }
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={finishPosting}>
          <NewCard
            onCancel={finishPosting}
            onSubmit={setNewCard}
          />
        </Modal>
      )}
      <ul className={classes.cards}>
        {names.map(({ name, role }, index) => (
          <Card
            key={index}
            name={name}
            role={role}
          />
        ))}
      </ul>
    </>
  );
};
