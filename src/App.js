import React, { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {
  const name='hassan'
  const [tasks,setTasks]=useState([
      {
          id:1,
          text:'Meeting with Dr Shoiab',
          time:'Tuesday 18 at 1:30pm',
          reminder:true
      },
      {
          id:2,
          text:'Meeting with Graxo',
          time:'Thursday 20 at 1:30pm',
          reminder:false
      },{
          id:3,
          text:'Meeting with Horizon',
          time:'Friday 21 at 3:30pm',
          reminder:true
      },
    ]

  )
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  // const addTask=(id)=>{
  //   setTasks(...Tasks,{id:id,})
  // }

  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
  }

  return (

    <div className="container">
      <Header title='Task Tracker'/>
      <AddTask/>
      {tasks.length>0?<Tasks tasks={tasks}  onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks '}
    </div>
  );
}

export default App;
