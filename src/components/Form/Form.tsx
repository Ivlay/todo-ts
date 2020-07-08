import React, { useState } from 'react';
import style from './form.module.scss';
import Button from '../Button/Button';

type FormProps = {
  onAdd(title: string): void;
};

const Form: React.FC<FormProps> = (props) => {
  const [title, setTitle] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.trim() !== '') {
      props.onAdd(title.trim());
    }
    setTitle('');
  };

  return (
    <form className={style.form} action='/' onSubmit={submitHandler}>
      <Button
        title   = {'add'}
        id      = {1}
        onClick = {() => {}}
      />
      <input
        type        = 'text'
        placeholder = 'Add todo'
        value       = {title}
        onChange    = {changeHandler}
      />
    </form>
  );
};

export default Form;
