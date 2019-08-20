import React from 'react';

const GameListItem = ({ game, deleteTodo, markAs }) => {
	let isDone = (
			<a href='#' title='Mark as done' onClick={() => markAs(game)}>
				<i className='checkmark icon' />
			</a>
		),
		doneClass = '';
	if (game.done) {
		doneClass = 'todo-done';
		isDone = (
			<a href='#' title='Mark as undone' onClick={() => markAs(game, 'undone')}>
				<i className='history icon' />
			</a>
		);
	}
	return (
		<div className={`ui divided list ${doneClass}`}>
			<div className='item'>
				<div className='left floated content'>
					{game.name}
					<a href='#' title='Remove' onClick={() => deleteTodo(game)}>
						<i className='remove icon' />
					</a>
				</div>
				<div className='content'>{game.body}</div>
			</div>
		</div>
	);
};

export default GameListItem;
