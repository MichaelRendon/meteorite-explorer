import React, { Component } from 'react';

const Title = () => {
	return (
		<div>
			<h1>Meteorite Explorer</h1>
		</div>
		);
}

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: null,
		};
	}


componentDidMount() {
	fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
	.then(response => response.json())
	.then(data => this.setState({ data }));
}

	

}


export default App;
