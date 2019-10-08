import React, { useReducer, useState } from 'react';
import { todo, reducer } from '../reducers/reducer';

export default function TodoList() {
	const [ state, dispatch ] = useReducer(reducer, todo);
	const [ todoItem, setTodo ] = useState('');

	const handleChanges = (e) => {
		e.preventDefault();
		setTodo(e.target.value);
	};

	return (
		<div>
			<div>
				<input className="input" type="text" name="todo" onChange={handleChanges} />
				<button onClick={() => dispatch({ type: 'ADD_TODO', payload: todoItem })}>Add Todo</button>
			</div>
			{state.map((item) => {
				return (
					<div>
						{!item.completed ? (
							<div>
								<h1>{item.item}</h1>
								<button onClick={() => dispatch({ type: 'COMPLETE', payload: item.id })}>
									Complete
								</button>
							</div>
						) : (
							<div>
								<h1 className="completed">{item.item}</h1>
								<button onClick={() => dispatch({ type: 'COMPLETE', payload: item.id })}>
									Complete
								</button>
							</div>
						)}
					</div>

					// <div>
					// 	<h1>{item.item}</h1>
					// 	<button>Complete</button>
					// </div>
				);
			})}
		</div>
	);
}
