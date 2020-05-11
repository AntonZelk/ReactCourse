import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = (props) => {
  const { todos, onToggleLike, onToggleImp, onDeleteItem } = props;
  return (
    <ul className="app-list list-group">
      {todos.map((todo) => {
        const { id, title } = todo;
        return (
          <TodoListItem
            key={id}
            title={title}
            important={todo.important}
            like={todo.like}
            onToggleLike={() => {
              onToggleLike(todo.id);
            }}
            onToggleImp={() => {
              onToggleImp(todo.id);
            }}
            onDeleteItem={() => {
              onDeleteItem(todo.id);
            }}
          />
        );
      })}
    </ul>
  );
};
export default TodoList;
