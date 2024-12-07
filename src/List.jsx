import "./List.css"
import { useState } from "react";

function List(){
 const [tasks, setTask] =useState([])
 function inputTasks(event){
   setNewTask(event.target.value)
 }

 const [ newTask, setNewTask]= useState("")
 function addTasks(){
    if(newTask === ""){
        alert("please add task")
    }else{
   setTask([...tasks, newTask])
   setNewTask("")
    }
   
 }

 function removeTask(index){
    setTask(tasks.filter((_, i) => i !== index))
 }
   
    return(
        <div className="listContainer">
            <header><h1>Todo list</h1></header>
            <input className="input" value={newTask} onChange={(event)=> inputTasks(event)}/>
            <div className="listBody">
                <div>{tasks.map((task,index) =><div key={index} className="listItems"><p  className="list">{task}</p><button className="btn1" onClick={()=>removeTask(index)}>X</button></div>)}</div>
                
            </div>
            <button onClick={addTasks} className="btn2">+</button>
        </div>
    )
}
export default List;