import { useState } from "react"

function TaskForm(){
    const [task, setTask] = useState({
        title: "",
        description: ""
    })

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(task)
    }


    return(
        <form onSubmit={handleSubmit}>
            <input name="Title" type={Text} placeholder="Title" onChange={handleChange}/>
            <textarea name="Description" placeholder="Description" onChange={handleChange}/>

            <button>Save</button>
        </form>
    )
}

export default TaskForm