
interface TodoProps {
    task: {
        id: number;
        task: string;
        completed: boolean;
    };
    onToggleCompleted: (id: number) => void;
}

export const Todo: React.FC<TodoProps> = ({ task, onToggleCompleted }) => {
    const handleChange = () => {
        onToggleCompleted(task.id);
    };



    return (
        <div className="Todo">
            <p>{task.task}</p> 
            <label>
            <button onClick={handleChange}>{task.completed ? 'undo' : 'finished'}</button>
            </label>
        </div>
    )
}