const tasks = ["Learn React", "Build a project", "Read documentation", "Conquer the world"];

const ToDoList = () => {  
    return (
        <div>
            <ul className="todo-list">
                <li>{tasks[0]}</li>
                <li>{tasks[1]}</li>
                <li>{tasks[2]}</li>
                <li>{tasks[3]}</li>
            </ul>
        </div>
 );
}

export default ToDoList;