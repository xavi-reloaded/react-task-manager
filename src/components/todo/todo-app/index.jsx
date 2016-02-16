import React from 'react'
import TodoList from '../todo-list'
import TodoModel from '../model'

class TodoApp extends React.Component {

  constructor(props) {
    super(props)
		this.model = new TodoModel;
		this.switchTodo = this.switchTodo.bind(this);
		this.inputTodo = this.inputTodo.bind(this);
  }

	componentWillMount() {
		this.setState({ todos: this.model.getTodos(), view: this.model.getViewModel() });
	}

	switchTodo () {
		this.setState( (this.state.view.showTodo == 'show') ? {view:{showTodo:''}} : {view:{showTodo:'show'}} );
	}

	inputTodo (event) {
		if (event.key === 'Enter') {
			this.model.inputTodo(event.target.value);
			this.setState(this.model.getTodos());
			event.target.value='';
		}

	}

  render() {
		if (this.state.todos.length > 0) {
			return (

				<div id="todo" className={this.state.view.showTodo} style={{opacity: this.state.view.c}}>
					<div className="pane todo-pane todo-list" style={{'max-height': this.state.view.a }}>
						<div className="todo-list-header">
							<div id="todo-count">{this.state.todos.length + ' to do'}</div>
						</div>

						<TodoList todos={this.state.todos} />

						<input id="todo-new" className="todo-input" type="text" placeholder="New todo" onKeyPress={this.inputTodo}/>
					</div>
					<span id="todo-remaining"></span>
					<span className="toggle todo-toggle" onClick={this.switchTodo}>Todo</span>
				</div>

			)
		} else {
			return <p className="text-center">Loading...</p>
		}

  }

}

export default TodoApp
