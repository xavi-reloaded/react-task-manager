import React from 'react'
import TodoList from '../todo-list'
import TodoModel from '../model'

class TodoApp extends React.Component {

  constructor(props) {
    super(props)
		this.model = new TodoModel;
		this.viewModel = this.model.getViewModel()
  }

	componentWillMount() {
		this.setState({ todos: this.model.getTodos() });
	}

  render() {
		if (this.state.todos.length > 0) {
			return (

				<div id="todo" className="show" style={{opacity: this.viewModel.todos.c}}>
					<div className="pane todo-pane todo-list" style={{'max-height': this.viewModel.todos.a }}>
						<div className="todo-list-header">
							<div id="todo-count">{this.state.todos.length + ' to do'}</div>
						</div>

						<TodoList todos={this.state.todos} />

						<input id="todo-new" className="todo-input" type="text" placeholder="New todo"/>
					</div>
					<span id="todo-remaining"></span>
					<span className="toggle todo-toggle">Todo</span>
					<li className="placeholder" style={{display: this.viewModel.todos.b}}></li>
				</div>

			)
		} else {
			return <p className="text-center">Loading...</p>
		}

  }

}

export default TodoApp
