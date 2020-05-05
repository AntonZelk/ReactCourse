import React from "react";


const TodoListItem = (props) => {
    const { title } = props;

    return (
    <li className = "list-group-item">
        <div className = "app-list-item d-flex justify-content-between important like">
          <span className = "app-list-item-label">
          {title}
          </span>
          <div className = "d-flex flex-column">
            <div className = "d-flex justify-content-center align-items-center">
              <button type="button" className = "btn-check btn-sm">
                <i className ="fa fa-check"></i>
              </button>
              <button type="button" className = "btn-trash btn-sm">
                <i className = "fa fa-trash-o"></i>
              </button>
              <i className = "fa fa-heart"></i>
            </div>
          </div>
        </div>
      </li>
    )
};
export default TodoListItem;