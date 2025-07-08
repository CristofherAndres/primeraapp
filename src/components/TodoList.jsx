import {Fragment, useRef, useState} from 'react';

import TodoItem from './TodoItem';

import uuid4 from 'uuid4';

const TodoList = () => {
	const [todos, setTodos] = useState([
		{id: 1, tarea: 'Estudiar React', estado: false},
		{id: 2, tarea: 'Hacer la compra', estado: true},
		{id: 3, tarea: 'Llamar a mamá', estado: false},
		{id: 4, tarea: 'Estudiar Bases de datos', estado: false},
		{id: 5, tarea: 'Hacer Ejercicios', estado: true},
	]);

	const addTask = () => {
		const tarea = tareaRef.current.value.trim();
		if (tarea === '') return;
		/* Entender que hace esta función */
		setTodos((prevTodos) => {
			const nuevaTarea = {
				id: uuid4(),
				tarea: tarea,
				estado: false,
			};
			return [...prevTodos, nuevaTarea]
		});
		tareaRef.current.value = null;
	};

	/* Definimos el item que capturará el dato de la tarea */

	const tareaRef = useRef();

	return (
		<Fragment>
			<h1 className="display-5 my-3">Lista de tareas ✔️😊</h1>

			<div className="input-group my-5">
				<input
					type="text"
					placeholder="Agregar tarea"
					className="form-control"
					ref={tareaRef}
				/>

				<button className="btn btn-success ms-2" onClick={addTask}>
					<i className="bi bi-folder-plus"></i>
				</button>

				<button className="btn btn-danger ms-2">
					<i className="bi bi-trash3"></i>
				</button>
			</div>

			{/* Funcion avanzada de JS */}

			<ul className="list-group my-5">
				{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</ul>
		</Fragment>
	);
};

export default TodoList;
