import React from 'react';
import './button.css';

type ButtonProps = {
  title: string;
  onClick: (id: number) => void;
  id: number;
};

const Button: React.FC<ButtonProps> = ({ title, onClick, id }) => {
  const classes = ['material-icons'];

  classes.push(title);
  
  return <button onClick={() => onClick(id) } className={classes.join(' ')}>{title}</button>;
};

export default Button;
