import React from 'react';
import TodoList from '../components/TodoList';
import TodoHeader from '../components/TodoHeader';
import TodoBottomForms from '../components/TodoBottomForm';
import './App.css';
import TodoSearchPanel from '../components/TodoSearchPanel';
import ModalComp from '../components/ModalComp';
import nextId from 'react-id-generator';

class App extends React.Component {
  state = {
    todos: [
      { id: nextId(), title: 'Learn React', important: false, like: false },
      { id: nextId(), title: 'Learn Redax', important: false, like: false },
      { id: nextId(), title: 'Learn Hooks', important: false, like: false },
    ],
    filter: 'All',
    term: '',
  };

  addItem = (title) => {
    const newTodo = {
      id: nextId(),
      title: title,
      important: false,
      like: false,
    };

    this.setState((prevState) => {
      return {
        todos: [...prevState.todos, newTodo],
      };
    });
  };

  deleteItem = (id) => {
    const openModal = window.confirm('Вы уверены, что хотите удалить элемент?');
    if (openModal) {
      this.setState((prevState) => {
        return {
          todos: prevState.todos.filter((todo) => todo.id !== id),
        };
      });
    }
  };

  toggleLike = (id) => {
    this.setState((prevState) => {
      const newArr = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.like = !todo.like;
        }
        return todo;
      });
      return {
        todos: newArr,
      };
    });
  };

  toggleImportant = (id) => {
    this.setState((prevState) => {
      const newArr = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.important = !todo.important;
        }
        return todo;
      });
      return {
        todos: newArr,
      };
    });
    console.log(id);
  };

  searchItems = (filter) => {
    this.setState(() => {
      return {
        filter: filter,
      };
    });
  };

  searchValues = (term) => {
    this.setState(() => {
      return {
        term: term,
      };
    });
  };

  filteredSearchItems = (arr, term) => {
    if (term.length === 0) {
      return arr;
    } else {
      return arr.filter((item) => item.title.includes(term));
    }
  };

  filteredItems = (arr, filter) => {
    if (filter === 'liked') {
      return arr.filter((item) => item.like === true);
    } else if (filter === 'important') {
      return arr.filter((item) => item.important === true);
    } else {
      return arr;
    }
  };

  render() {
    const { todos, filter, term } = this.state;

    const visibleTodos = this.filteredItems(
      this.filteredSearchItems(todos, term),
      filter
    );

    const countAll = todos.length;

    const countLike = todos.filter((todos) => todos.like === true).length;

    return (
      <div className="app">
        <TodoHeader countAll={countAll} countLike={countLike} />
        <TodoSearchPanel
          searchItems={this.searchItems}
          searchValues={this.searchValues}
        />
        <TodoList
          todos={visibleTodos}
          onToggleLike={this.toggleLike}
          onToggleImp={this.toggleImportant}
          onDeleteItem={this.deleteItem}
        />
        <TodoBottomForms addItem={this.addItem} />
        <ModalComp />
      </div>
    );
  }
}

export default App;
