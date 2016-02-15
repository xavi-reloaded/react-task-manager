import React from 'react'

class TodoRow extends React.Component {

  render() {
    return(
			<li draggable="true">
				<div className="view">
					<a className="destroy">✕</a>
					<label><input className="toggle" type="checkbox"/></label>
					<span>{this.props.title}</span>
				</div>
				<input className="edit todo-input" type="text" value={this.props.title}/>
			</li>
    )
  }
}

export default TodoRow
