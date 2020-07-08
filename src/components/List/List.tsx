import React from 'react';
import ListItem from '../ListItem/ListItem';
import TTodo from '../../types';
import './list.css';

type ListProps = {
  className: string;
  todos: TTodo[];
  onRemove: (id: number) => void;
  onToggleCheck : (id: number) => void;
  editHandler   : (id: number, value: string) => void;
};

const List: React.FC<ListProps> = ({ className, todos, onRemove, onToggleCheck, editHandler }) => {
  const renderList = () => todos.map((el) => {
      return (
        <ListItem
          onEdit    = {editHandler}
          title     = {el.title}
          className = {className}
          key       = {el.id}
          onCheck   = {onToggleCheck}
          onDelete  = {onRemove}
          onId      = {el.id}
        />
      );
    });

  return <ul className={className}>{renderList()}</ul>;
};

export default List;
