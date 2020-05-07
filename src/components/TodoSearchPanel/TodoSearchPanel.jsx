import React from 'react';
import TodoBtns from '../TodoBtns/TodoBtns';
import './TodoSearchPanel.css';

const TodoSearchPanel = () => {
  return (
    <div className="search-panel d-flex">
      <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск"
      />
      <TodoBtns />
    </div>
  );
};
export default TodoSearchPanel;
