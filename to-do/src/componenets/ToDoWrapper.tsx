import { useState } from "react";
import { TodoForm } from "./ToDoForm";
import { Todo } from "./ToDo";


export const TodoWrapper = () => {
    const [todos, setTodos] = useState<{ id: number; task: string; completed: boolean; isEditing: boolean }[]>([]);

    const addTodo = (id  : number, todo: string) => {
        setTodos([...todos, {id :id, task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    const toggleCompleted = (taskId : number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === taskId ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const completeTodos = todos.filter((todo) => todo.completed);
    const incompleteTodos = todos.filter((todo) => !todo.completed);
    
    return (
        <div className="TodoWrapper">
            <TodoForm addTodo={addTodo} />
            <h1>tasks to do</h1>
            {incompleteTodos.map((todo) => (
                <Todo key={todo.id} task={todo} onToggleCompleted={toggleCompleted} />
            ))}
            <h1>tasks done</h1>
            {completeTodos.map((todo) => (
                <Todo key={todo.id} task={todo} onToggleCompleted={toggleCompleted} />
            ))}
        </div>
    );
};