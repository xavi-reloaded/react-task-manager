
var TodoModel = function (todos) {
	todos = todos || [
			{ id: 1, title: "Llamar a Mr Diguiger", active: true },
			{ id: 2, title: "Reunión con Richard", active: true },
			{ id: 3, title: "Estimar backlog", active: true },
			{ id: 4, title: "Enviar email", active: true }
		];
	this.todos = todos;
};

TodoModel.prototype.getTodos = function () {
	return this.todos;
};

TodoModel.prototype.getViewModel = function () {
	return { a:'174px', b:'none', c:1, showTodo:'show' };
}

TodoModel.prototype.inputTodo = function(text) {
	this.todos.push({ id: this.todos.length + 1, title: text, active: true });
}

export default TodoModel
