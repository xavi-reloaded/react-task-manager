import React from 'react'
import TodoRow from '../todo-row'

class TodoList extends React.Component {

  render() {
    return (
			<ol>

					{
						this.props.todos.map((todo) => {
							return <TodoRow key={ todo.id }
																	title={ todo.title }
																	active={ todo.active }/>
						})
					}

			</ol>
    )
  }
}

export default TodoList
