
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
			{ id: 1, title: "Llamar a Mr Diguigerian", active: true },
			{ id: 2, title: "Reunión con Richard", active: true },
			{ id: 3, title: "Estimar backlog", active: true },
			{ id: 4, title: "Enviar email", active: true }
		]

		return todos;
	}

	getState(){
		return { todos: {a:'174px', b:'none', c:1} };
	}
}

export default TodoModel
