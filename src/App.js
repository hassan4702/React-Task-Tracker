import React, { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
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
          id:1,
          text:'Meeting with Horizon',
          time:'Friday 21 at 3:30pm',
          reminder:true
      },
    ]

  )

  return (

    <div className="container">
      <Header title='Tasks Tracker'/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
