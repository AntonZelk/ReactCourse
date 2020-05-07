import React from 'react';
import TodoList from '../components/TodoList';
import TodoHeader from '../components/TodoHeader';
import TodoBottomForms from '../components/TodoBottomForm';

import './App.css';
import TodoSearchPanel from '../components/TodoSearchPanel';

const todos = [
  { id: 1, title: 'Learn React' },
  { id: 2, title: 'Learn Redax' },
  { id: 3, title: 'Learn Hooks' },
];

const doneItem = (str) => {
  alert(str);
};
const likeItem = (el) => {
  alert(el);
};

const App = () => {
  return (
    <div className="app">
      <TodoHeader />
      <TodoSearchPanel />
      <TodoList todos={todos} onDone={doneItem} onLike={likeItem} />
      <TodoBottomForms />
    </div>
  );
};

export default App;
