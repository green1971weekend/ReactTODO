import React from "react";
import TodoItem from "./TodoItem"

const TodoList = ({todoItems, setTodoItem}) => {

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todoItems.map((item, index) => (
                    <TodoItem value={item.text} 
                              key={index} 
                              todoItems={todoItems}
                              setTodoItem={setTodoItem} 
                              todo={item}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;