import React from 'react'
import TodoList from '../todo-list'

class TodoApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = { todos: {a:'174px', b:'none', c:1} }
  }

	componentWillMount() {
		//fetch('http://myURL')
		//  .then((response) => {
		//    return response.json()
		//  })
		//  .then((empleados) => {
		//    this.setState({ todos: todos })
		//  })
		let todos = [
			{ id: 1, title: "Llamar a Pepito", active: true },
			{ id: 2, title: "Reunión con Richard", active: true },
			{ id: 3, title: "Estimar backlog", active: true },
			{ id: 4, title: "Enviar email", active: true }
		]
		this.setState({ todos: todos });
	}

  render() {
		if (this.state.todos.length > 0) {
			return (

				<div id="todo" className="show" style={{opacity: this.state.todos.c}}>
					<div className="pane todo-pane todo-list" style={{'max-height': this.state.todos.a }}>
						<div className="todo-list-header">
							<div id="todo-count">{this.state.todos.length + ' things to do'}</div>
						</div>

						<TodoList todos={this.state.todos} />

						<input id="todo-new" className="todo-input" type="text" placeholder="New todo"/>
					</div>
					<span id="todo-remaining"></span>
					<span className="toggle todo-toggle">Todo</span>
					<li className="placeholder" style={{display: this.state.todos.b}}></li>
				</div>

			)
		} else {
			return <p className="text-center">Loading...</p>
		}

  }

}

export default TodoApp
