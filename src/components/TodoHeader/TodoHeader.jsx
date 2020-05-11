import React from 'react';
import TodoTitle from './TodoTitle';

const TodoHeader = (props) => {
  const { countAll, countLike } = props;
  return (
    <div className="app-header d-flex">
      <TodoTitle />
      <h2>
        {countAll} записей, из них понравилось {countLike}
      </h2>
    </div>
  );
};
export default TodoHeader;
