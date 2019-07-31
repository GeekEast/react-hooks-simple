import { useState, useEffect } from 'react';
import { posts, todos } from '../apis';

const useResource = (resource) => {
	// initialize the state object with setter method
	const [ resources, setResources ] = useState([]);

	// data loading function
	const getResources = async (resource) => {
		const response = resource === 'posts' ? await posts.get() : await todos.get();
		setResources(response.data);
	};

	// 1st parameter for componentDidMount
	useEffect(
		() => {
			getResources(resource);
		},
		// 2nd parameter for componentDidUpdate
		// the props to compare between two render process
		[ resource ]
	);

	return resources;
};

export default useResource;
