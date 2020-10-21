import React, { useState } from 'react';
import '../App.css';
import Form from "./Form"
import TodoList from "./TodoList"

function App() {

  const[inputText, setInputText] = useState("");
  const[todoItems, setTodoItem] = useState([]);

  return (
    <div className="App">
        <header>
          <h1>TODO List</h1>
        </header>
        <Form todoItems={todoItems} setTodoItem={setTodoItem} inputText={inputText} setInputText={setInputText}/>
        <TodoList todoItems={todoItems}/>
    </div>
  );
}

export default App;
