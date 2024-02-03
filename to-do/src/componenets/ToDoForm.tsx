import React, {useState} from 'react'

interface TodoFormProps { addTodo: (id: number, todo: string) => void;}

export const TodoForm: React.FC<TodoFormProps> = ({addTodo}) => {
    const [value, setValue] = useState<string>('')
    const [id, setId] = useState(0);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        addTodo(id, value)

        setValue('')
    }
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" className="todo-input" placeholder='What is the task today?' value={value} 
        onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className='todo-btn' onClick={() => setId(id + 1)}>Add Task</button>
        </form>
    )
}