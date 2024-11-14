import React, { useState } from 'react';import './TodoList.css';
const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <h1 className="title">My Todo List</h1>
            <div className="input-container">
                <input
                    type="text"
                    className="heading-input"
                    placeholder="Enter task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className="add-list-button" onClick={addTask}>Add Task</button>
            </div>
            <div className="todo_main">
                {tasks.length > 0 ? (
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={index} className="task-item">
                                {task}
                                <button onClick={() => removeTask(index)} className="delete-button">Delete</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="no-tasks">No tasks added</p>
                )}
            </div>
        </div>
    );
};
export default TodoList;