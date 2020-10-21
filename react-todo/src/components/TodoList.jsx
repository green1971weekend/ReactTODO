import React from "react";
import TodoItem from "./TodoItem"

const TodoList = ({todoItems}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todoItems.map((item, index) => (
                    <TodoItem value={item.text} key={index}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;