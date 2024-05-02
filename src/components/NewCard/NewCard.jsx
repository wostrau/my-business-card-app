import { useState } from 'react';

import classes from './NewCard.module.css';

export const NewCard = ({ onCancel, onSubmit }) => {
  const initialState = { name: '', role: '' };
  const [card, setCard] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCard((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(card);
  };

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <p>
        <label htmlFor='role'>Role</label>
        <textarea
          name='role'
          rows={3}
          value={card.role}
          onChange={handleInputChange}
          required
        />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input
          type='text'
          name='name'
          value={card.name}
          onChange={handleInputChange}
          required
        />
      </p>
      <p className={classes.actions}>
        <button
          type='button'
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type='submit'>Submit</button>
      </p>
    </form>
  );
};
