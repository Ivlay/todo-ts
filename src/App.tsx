import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import EmptySection from './components/EmptySection/EmptySection';
import List from './components/List/List';
import TTodo from './types';

const App: React.FC = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: TTodo = {
      title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem('todos') || '[]') as TTodo[];

    setTodos(todo);
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  const activeList   = todos.filter(el => !el.completed);

  const inActiveTodos = todos.filter(el => el.completed);

  const toggleCheckTodo = (id: number) => {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed};
      }
      return todo;
    })
    );
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const renderEmtyOrList = () => {
    return (!todos.length ? <EmptySection /> : null);
  }

  const onEditTodoHandle = (id: number, value: string) => {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return {...todo, title: value};
      }
      return todo;
    })
    );
  }

  return (
    <>
      <div className = 'todo'>
        <Header />
        <Form onAdd  = {addHandler} />
        {activeList.length ?
          <List
            editHandler   = {onEditTodoHandle}
            className     = 'activeList'
            todos         = {activeList}
            onToggleCheck = {toggleCheckTodo}
            onRemove      = {deleteTodo}
          />
        : null
        }
        {inActiveTodos.length ?
          <List
            editHandler   = {onEditTodoHandle}
            className     = 'inActiveList'
            todos         = {inActiveTodos}
            onToggleCheck = {toggleCheckTodo}
            onRemove      = {deleteTodo}
          />
        : null  
        }
      </div>
      {renderEmtyOrList()}
    </>
  );
};

export default App;
