import React from "react";
import TodoItem from "./TodoItem"

const TodoList = ({todoItems, setTodoItem, filteredTodos}) => {

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((item, index) => (
                    <TodoItem value={item.text} 
                              key={index} 
                              todoItems={todoItems}
                              setTodoItem={setTodoItem} 
                              todo={item}
                              filteredTodos={filteredTodos}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;