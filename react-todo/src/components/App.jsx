import React, { useState, useEffect } from 'react';
import '../App.css';
import Form from "./Form"
import TodoList from "./TodoList"

function App() {

  const[inputText, setInputText] = useState("");
  const[todoItems, setTodoItem] = useState([]);
  const[status, setStatus] = useState("all");
  const[filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getTodoItemsFromLocalStorage();
  }, []);

  useEffect(() => {
    filterHandler();
    saveTodoItemsToLocalStorage();
  }, [status, todoItems]);


  const saveTodoItemsToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
  }
  const getTodoItemsFromLocalStorage = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localStore = JSON.parse(localStorage.getItem("todos", JSON.stringify(todoItems)));
      setTodoItem(localStore)
    }
  }

  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todoItems.filter(item => item.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todoItems.filter(item => item.completed === false))
        break;
      default: 
        setFilteredTodos(todoItems);
    }
  }

  return (
    <div className="App">
        <header>
          <h1>TODO List</h1>
        </header>
        <Form todoItems={todoItems} 
              setTodoItem={setTodoItem} 
              inputText={inputText} 
              setInputText={setInputText} 
              setStatus={setStatus}/>

        <TodoList todoItems={todoItems} setTodoItem={setTodoItem} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
