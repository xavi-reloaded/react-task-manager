
class TodoModel {


	getTodos() {
		//fetch('http://myURL')
		//  .then((response) => {
		//    return response.json()
		//  })
		//  .then((empleados) => {
		//    this.setState({ todos: todos })
		//  })
		let todos = [
			{ id: 1, title: "Llamar a Mr Diguiger", active: true },
			{ id: 2, title: "Reunión con Richard", active: true },
			{ id: 3, title: "Estimar backlog", active: true },
			{ id: 4, title: "Enviar email", active: true }
		]

		return todos;
	}

}

export default TodoModel
