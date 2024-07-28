import React, { ChangeEvent, useState } from 'react';
import './App.css';
interface ToDoList{
  id:number
  toDoItem:string
}
function App() {
  const [toDoText,setToDoText] = useState<string>("");
  const [toDoList, setToDoList] = useState<ToDoList[]>([]);
  const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
    setToDoText(event?.target.value)
  }
  
  const handleDeleteToDo = (id:number)=>{
    setToDoList(toDoList.filter((todoItem)=>todoItem.id !== id))
  }
  const handleAddToDo = ()=>{
    const newToDo:ToDoList = {id:toDoList.length +1,toDoItem:toDoText}
    setToDoList([...toDoList,newToDo]);
    setToDoText("")
  }

  return (
    <div className="App">
      <div className='container'>
      <input type='text' onChange={handleChange} value={toDoText}/>
      <button onClick={handleAddToDo}>Add to do</button>
      <ul className="todo-list">
      {
        (toDoList.length>0) ?(
          toDoList.map((todoItem)=>(
                <li key={todoItem.id} className='todo-item'>{todoItem.toDoItem}
                <button onClick={()=>handleDeleteToDo(todoItem.id)}>Delete</button></li>
          ))
        ):""
      }
      </ul>
      </div>
    </div>
  );
}

export default App;
