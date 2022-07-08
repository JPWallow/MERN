import React, { useState } from "react";
import './App.css';

function App() {

  const [newTask, setNewTask] = useState(""); 
  const [tasks, setTasks] = useState([]);
  
  const handleNewTask = (e) => {
    e.preventDefault();

    if (newTask.length < 1) {
      return;
    }

    const taskItem = {
      text: newTask,
      complete: false
    }

    setTasks([...tasks, taskItem]);
  };


  const handleTaskRemove = (removeTask) => {
    const updatedTasks = tasks.filter((task, i) => {
      return i !== removeTask;
    });

    setTasks(updatedTasks);
  };
  
  const handleComplete = (index) => {
    const completedTasks = tasks.map((task, i) => {
      if (index === i) {
        task.complete =!task.complete;
      }

      return task;
    });

    setTasks(completedTasks);
  }

  return (
    <div style={{ margin: "10px" }}>
      <form 
      onSubmit={(e) => {
        handleNewTask(e);
      }}
      >
        <input 
        onChange={(e) =>{
          setNewTask(e.target.value);
        }} 
        type="text"
        />
        <div>
          <button style={{ backgroundColor: "blue", color: "white", borderRadius: "5px", border: "blue" }}> Add </button>
        </div>
      </form>

      <div>
        {tasks.map((task, i) => {
          const taskClasses= [];

          if (task.complete) {
            taskClasses.push("strike");
          }

          return(   
            <div key={i}>
              <input onChange={(e) => {
                handleComplete(i);
              }}  type="checkbox" />
              <span className={taskClasses.join(" ")}>{task.text} </span>
              <button onClick={(e) =>{
                handleTaskRemove(i);
              }}
              style={{ backgroundColor: "black", color: "white", borderRadius: "5px", border: "black", height: "20px"}}> Delete </button>          
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
