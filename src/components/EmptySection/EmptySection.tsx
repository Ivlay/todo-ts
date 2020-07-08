import React from 'react';
import style from './empty.module.scss';

const EmptySection = () => {
  return (
    <div className={style.emptySection}>
      <div className={style.emptyImg}>
        <span>list</span>
      </div>
      <div className={style.emptyText}>
        <h3>Your Todo list is empty</h3>
        <p>Let's create your list and execute it.</p>
      </div>
    </div>
  );
};

export default EmptySection;
