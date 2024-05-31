import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tareas, setTasks] = useState(["Wash my hands", "Make homework"])
	const [newTask, setNewTask] = useState("")
	
	
	const handleTareaNueva = (event) => {
		setNewTask(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setTasks([...tareas,newTask])
		setNewTask("")
	}

	const handleDelete = (positionToDelete) => {
		const newArr = []
		for (let i = 0; i < tareas.length; i++) {
			if (i !== positionToDelete) {
				newArr.push(tareas[i])
			}
		}
		setTasks(newArr)
	}

	return (
	
		<div className="w-50 m-auto mt-5">
			<form onSubmit={handleSubmit}> 
				<div className="mb-3 fs-4">
					<label htmlhtmlFor="exampleInputEmail1" className="form-label">Add your task here:</label>
					<input onChange={handleTareaNueva} type="text" className="form-control" id="newTask" value={newTask} aria-describedby="taskHelp"/>
					<div id="taskHelp" className="form-text">You'll never forguet a task again.</div>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
			
			
			<ul className="w-50 m-auto">
				{/* Utilizamos el método map para generar dinámicamente los elementos <li> */}
				{tareas.map((item, index) => (
				<li className="fs-4" key={index}>{item}
					<button onClick={()=>handleDelete(index)} type="button" className="btn btn-danger btn-sm">X</button>
				</li>
				))}
			</ul>
			{tareas.length === 0 ? <span>No task, add a task</span> : <span>{tareas.length} tasks left</span>}
		</div>
		

	);
};

export default Home;