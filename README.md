## React Hooks
 | Name       | Goal                                                  |
 | ---------- | ----------------------------------------------------- |
 | useState   | allow function component ot use component-level state |
 | useEffect  | use life-cycle methods                                |
 | useContext | use context system                                    |
 | useRef     | use ref system                                        |
 | useReducer | store data through a 'reducer'                        |
 
 ## Class Component
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