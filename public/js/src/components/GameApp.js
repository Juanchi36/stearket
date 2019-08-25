import React, { Component } from 'react';

// our components
import GameList from './GameList';
//import TodoForm from './TodoForm';
import GameSearch from './GameSearch';

export default class Game extends Component {
	constructor (props) {
		super(props);
		this.state = {
			games: []
		};
	}

	fetchGameList () {
		//fetch(API_URL + '/todos').then((response) => {
		fetch(API_URL).then((response) => {
			response.json().then((jsonResponse) => {
				this.setState({ games: jsonResponse });
				console.log(jsonResponse);
			});
		});
	}

	render () {
		return (
			<div className='ui grid'>
				<div className='column'>
					{/* <h1>{this.remaining()} Remaining of {this.state.todos.length}</h1> */}
					<h1>Juegos</h1>
					<div className='ui divider' />
					<GameList
						games={this.state.games}
						//onDeleteTodo={this.onDeleteTodo.bind(this)}
						//onMarkAs={this.onMarkAs.bind(this)}
					/>
					{/* <div className='ui divider' />
					<TodoForm onTodoStore={this.handleNewTodo.bind(this)} /> */}
					<div className='ui divider' />
					<GameSearch />
				</div>
			</div>
		);
	}

	// onDeleteTodo (todo) {
	// 	if (!confirm('Are you sure ?')) return;

	// 	let index = this.state.todos.indexOf(todo),
	// 		self = this,
	// 		data = new FormData();

	// 	data.append('id', todo.id);
	// 	fetch(API_URL + '/todos/destroy', {
	// 		method: 'post',
	// 		body: data
	// 	}).then((response) => {
	// 		response.json().then((jsonResponse) => {
	// 			if (jsonResponse.success) {
	// 				self.setState({
	// 					todos: self.state.todos.filter((_, i) => i !== index)
	// 					// todos: update(self.state.todos, {$splice: [[index, 1]]}) // using react addons
	// 				});
	// 			}
	// 		});
	// 	});
	// }

	// onMarkAs (todo, state = 'done') {
	// 	let url =
	// 			state == 'done' ? API_URL + '/todos/done' : API_URL + '/todos/undone',
	// 		data = new FormData(),
	// 		index = this.state.todos.indexOf(todo),
	// 		self = this;

	// 	data.append('id', todo.id);

	// 	fetch(url, { method: 'post', body: data }).then((response) => {
	// 		response.json().then((jsonResponse) => {
	// 			if (jsonResponse.success) {
	// 				let todos = self.state.todos;
	// 				todos[index].done = state == 'done';
	// 				self.setState({
	// 					todos: todos
	// 				});
	// 			}
	// 		});
	// 	});
	// }

	// handleNewTodo (todo) {
	// 	this.setState({
	// 		todos: this.state.todos.concat(todo)
	// 	});
	// }

	// remaining () {
	// 	let count = 0;
	// 	this.state.todos.map((todo) => {
	// 		if (!todo.done) {
	// 			count++;
	// 		}
	// 	});
	// 	return count;
	// }

	componentDidMount () {
		this.fetchGameList();
	}
}
