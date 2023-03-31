import { useSelector } from "react-redux"


function TaskList(){
    const tasks = useSelector(state => state.task)
    

    return(
        <div>
            {tasks.map(tasks => (
            <div key={tasks.id}>
                <h3>{tasks.title}</h3>
                <p>{tasks.description}</p>
            </div>
        ))}</div>
    )
}

export default TaskList