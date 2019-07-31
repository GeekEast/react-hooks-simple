import React, { useState } from 'react';
import ResourcesList from './ResourcesList';
const App = () => {
	// state name, setter and default value
	// get the 1st ans 2nd element of an array
	const [ resource, setResource ] = useState('posts');
	return (
		<div>
			<div>
				<button className="ui button" onClick={() => setResource('posts')}>
					Posts
				</button>
				<button className="ui button" onClick={() => setResource('todos')}>
					Todos
				</button>
			</div>
			<ResourcesList resource={resource} />
		</div>
	);
};

export default App;
