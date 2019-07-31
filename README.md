## React Hooks
 | Name       | Goal                                                  |
 | ---------- | ----------------------------------------------------- |
 | useState   | allow function component ot use component-level state |
 | useEffect  | use life-cycle methods                                |
 | useContext | use context system                                    |
 | useRef     | use ref system                                        |
 | useReducer | store data through a 'reducer'                        |
 
 ### Class Component
 ```javascript
 import React from 'react';

class App extends React.Component {
	state = {
		resource: 'posts'
	};
	render() {
		return (
			<div>
				<div className="">
					<button className="ui button" onClick={() => this.setState({ resource: 'posts' })}>
						Posts
					</button>
					<button className="ui button" onClick={() => this.setState({ resource: 'todos' })}>
						Todos
					</button>
				</div>
				{this.state.resource}
			</div>
		);
	}
}
export default App;
 ```

### Function Component with Hooks
```javascript
import React, { useState } from 'react';

const App = () => {
	// state name, setter and default value
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
			{resource}
		</div>
	);
};

export default App;
```

### ComponentDidUpdate
- if componentDidUpdate will cause the re-render of the component, the page will be refeshed again and again
- Solution: compare prevProps and currProps
```javascript
componentDidUpdate = (prevProps) => {
	if (prevProps.resource !== this.props.resource){
		// render
	}
}
```
### useEffect
`useEffect` **=** `componentDidMount` **+** `componentDidUpdate` **+** `ComponentWillUnmount`

```javascript
useEffect(
	() => {
		getResources(resource);
	},
	// 2nd parameter for componentDidUpdate
	// the props to compare between two renderprocess
	[ resource ]
);
```
- If you pass `[]` as the `2nd` parameter, it's same to set the componentDidMount() **without** componentDidUpdate();
- If you pass `[sth]` as the `2nd` parameter, the inside function will be called in componentDidMount() and componentDidUpdate. And each update the React will `compare` the **previous** value and **current** value of sth to decide whether to update the state.
- If you pass **objects inside an array** as the 2nd parameter, the componentDidUpdate() will be called because react use **shallow** comparison.


### Code Reuse
- input and output -> can be reused as a function -> online lambda function
- 