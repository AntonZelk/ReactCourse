import React from "react";
import TodoTitle from "./TodoTitle";

const TodoHeader = () => {
    return (
       <div className = "app-header d-flex">
            <TodoTitle />
            <h2>5 записей, из них понравилось 0</h2>
       </div>
    )
};
export default TodoHeader;