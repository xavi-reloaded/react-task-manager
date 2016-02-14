import React from 'react'

class TodoApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = { todos: {a:'174px', b:'none', c:1} }
  }

  componentWillMount() {
  }

  render() {
      return (

				<div id="todo" className="show" style={{opacity: this.state.todos.c}}>
					<div className="pane todo-pane todo-list" style={{'max-height': this.state.todos.a }}>
						<div className="todo-list-header">
							<div id="todo-count">2 things to do</div>
						</div>
						<ol>

							<li draggable="true">
								<div className="view">
									<a className="destroy">✕</a>
									<label><input className="toggle" type="checkbox"/></label>
									<span>hello</span>
								</div>
								<input className="edit todo-input" type="text" value="hello"/>
							</li>

							<li draggable="true">
								<div className="view">
									<a className="destroy">✕</a>
									<label><input className="toggle" type="checkbox"/></label>
									<span>yeah</span>
								</div>
								<input className="edit todo-input" type="text" value="yeah"/>
							</li>

						</ol>
						<input id="todo-new" className="todo-input" type="text" placeholder="New todo"/>
					</div>
					<span id="todo-remaining"></span>
					<span className="toggle todo-toggle">Todo</span>
					<li className="placeholder" style={{display: this.state.todos.b}}></li>
				</div>

      )
  }

}

export default TodoApp
