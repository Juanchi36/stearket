import React from 'react';
import GameListItem from './GameListItem';

const GameList = ({ games }) => {
	const GameItems = games.map((game) => {
		return (
			<GameListItem
				game={game}
				key={game.id}
				// deleteTodo={onDeleteTodo}
				// markAs={onMarkAs}
			/>
		);
	});

	return <div>{GameItems}</div>;
};

export default GameList;
