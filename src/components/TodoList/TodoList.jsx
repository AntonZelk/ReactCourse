import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = (props) => {
  const { todos, onDone, onLike } = props;
  return (
    <ul className="app-list list-group">
      {todos.map((todo) => {
        const { id, title } = todo;
        return (
          <TodoListItem
            key={id}
            title={title}
            onDone={() => {
              onDone(todo.id);
            }}
            onLike={() => {
              onLike(todo.id);
            }}
          />
        );
      })}
    </ul>
  );
};
export default TodoList;
