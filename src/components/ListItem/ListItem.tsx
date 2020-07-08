import React, { useState, KeyboardEvent } from 'react';
import Button from '../Button/Button';
import './listItem.css';

type ListItemProps = {
  className : string;
  title: string;
  onDelete:(id: number) => void;
  onCheck:(id: number) => void;
  onEdit:(id: number, value: string) => void;
  onId: number;
};

const ListItem: React.FC<ListItemProps> = ({ title, onDelete, onId, className, onCheck, onEdit }) => {
  const [edit, setEdit]   = useState(false);
  const [value, setValue] = useState(title);

  const classes = [];

  if(edit) {
    classes.push('edit');
  }
  
  const nameButton = () => {
    if (className === 'activeList') return 'done';
    return 'add';
  }

  const toggleEdit = () => {
    setEdit(!edit);
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const checkValueAndEdit = () => {
    if(value.trim() !== '') {
      onEdit(onId, value.trim());
    } else {
      onDelete(onId);
    }
    toggleEdit();
  }

  const keyHandler = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13) {
      checkValueAndEdit();
    }
  }

  const editMode = () => {
    return (
      <input
        autoFocus
        spellCheck='false'
        value={value}
        onChange={changeHandler}
        onBlur={checkValueAndEdit}
        onKeyDown={keyHandler}
      />
    )
  }

  return (
    <li className={classes.join('')}>
      <div 
        className='view'
        onDoubleClick={toggleEdit}
      >
        {title}
      </div>
      <Button 
        title   = {nameButton()}
        id      = {onId}
        onClick = {onCheck}
      />
      <Button 
        title   = {'delete'}
        id      = {onId}
        onClick = {onDelete}
      />
      {edit && editMode()}
    </li>
  );
};

export default ListItem;
