import { createSlice } from "@reduxjs/toolkit";


const initialValues = [
       {
        id: "1",
        title: "Tarea 1 ",
        description: "Descripcion de la tarea 1",
        completed: false
        },
     {
        id: "2",
        title: "tarea 2 ",
        description: "descripcion de la tarea 2 ",
        completed: false
    }
]


export const taskSlice = createSlice({
    name: "task",
    initialState: initialValues ,
    reducers: {
           
        
    }
})


export default taskSlice.reducer