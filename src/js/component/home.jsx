import React, { useEffect, useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
//import { name } from "file-loader";

//create your first component
const Home = () => {
	const [users, setUsers] = useState([])
	const [newUser, setNewUser] = useState("")


	const access = async(event) => {
		event.preventDefault()
		const response = await fetch(`https://playground.4geeks.com/todo/users/${name}`)
		if(response.ok) {
			const data = await response.json
			setUsers(data.todos) }

	}
	const createUser = async(event) => {
		const userCreated = await fetch(`https://playground.4geeks.com/todo/users/${name}`,{
		method : 'POST'})
		if(userCreated.ok) {
			const dataNewUser = await userCreated.json()
			setNewUser([...users, dataNewUser])}
	}  



	useEffect(() => {
		//codigo que se va a ejcutar ni bien se cargue mi plataforma
		access()
	}, [])

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
		}
	};
	return (
		<div className="container" >
			{users.map((item, index) => <div key={index}>{item.name}</div>)}

			<form onSubmit={createUser} className="d-flex p-4">
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label fw-bold fs-5 ">Nombre de Usuario</label>
					<input type="text" className="form-control" i aria-describedby="emailHelp"/>
				</div>
				<button type="submit" className="btn btn-primary mx-3">access</button>
			</form>
		</div>
		);
};

	export default Home;