import React, { useState, useReducer } from "react";
import { TodoForm } from "./components/TodoForm";
import "./App.css";
import { reducer, initialState } from "./reducers/todoReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = input => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Math.random()
    };

    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const handleComplete = id => {
    dispatch({ type: "COMPLETED_TODO", payload: id });
  };

  const clearComplete = id => {
    dispatch({ type: "CLEAR_COMPLETED", payload: id });
  };

  return (
    <div className="App">
      <header>
        {state.map(todo => (
          <h1 key={todo.id}>{todo.name}</h1>
        ))}
      </header>
      <TodoForm />
    </div>
  );
}

export default App;
