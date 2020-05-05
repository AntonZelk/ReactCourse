import React from 'react';
import TodoList from './components/TodoList';
import TodoHeader from './components/TodoHeader';
import TodoSearch from './components/TodoSearch';
import TodoBottomForms from './components/TodoBottomForm';

import './App.css';

const todos =[
  { id: 1, title: "Learn React"},
  { id: 2, title: "Learn Redax"},
  { id: 3, title: "Learn Hooks"}
];


export default function App() {
  return (
    <div className ='app'>
      <TodoHeader />
      <TodoSearch />
      <TodoList todos ={todos} />
      <TodoBottomForms />
    </div>
  );
}


