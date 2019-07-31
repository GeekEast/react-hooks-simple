import React from 'react';
import useResource from './useResource';

const ResourcesList = ({ resource }) => {
	const resources = useResource(resource);
	if (!resources) {
		return <div>Loading</div>;
	}
	return <ul>{resources.map((record) => <li key={record.id}>{record.title}</li>)}</ul>;
};

export default ResourcesList;
