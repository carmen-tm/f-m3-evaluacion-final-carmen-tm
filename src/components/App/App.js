import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../containers/HomePage';
import CharacterDetailPage from '../../containers/CharacterDetailPage';
import './App.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" render={() => <HomePage />} />
					<Route
						exact
						path="/character/:characterId"
						render={routerProps => <CharacterDetailPage />}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
