import {Fragment} from 'react';

const TodoList = () => {
	return (
		<Fragment>
			<h1 className="display-5 my-3">Lista de tareas ✔️😊</h1>

			<div className="input-group my-5">
				<input
					type="text"
					placeholder="Agregar tarea"
					className="form-control"
				/>

				<button className="btn btn-success ms-2">
					<i className="bi bi-folder-plus"></i>
				</button>

				<button className="btn btn-danger ms-2">
					<i className="bi bi-trash3"></i>
				</button>
			</div>
		</Fragment>
	);
};

export default TodoList;
