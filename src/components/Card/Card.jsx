import classes from './Card.module.css';

export const Card = ({ name, role }) => {
  return (
    <div className={classes.card}>
      <p className={classes.name}>{name}</p>
      <p className={classes.role}>{role}</p>
    </div>
  );
};
