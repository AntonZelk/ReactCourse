import React from "react";
import TodoBtns from "./TodoBtns";

const TodoSearch = () => {
    return (
        <div className = "search-panel d-flex">
            <input className= "form-control search-input" type="text" placeholder="Поиск" />
            <TodoBtns />
        </div>
    )
};
export default TodoSearch;