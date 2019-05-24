import React from 'react';
// import PropTypes from 'prop-types';
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
					<Route
						exact
						path="/"
						render={() => {
							return (
								<HomePage
									dataArr={[]}
									onChangeFilter={e => console.log(e)}
									valueFilter=""
								/>
							);
						}}
					/>
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

// App.propTypes = {};

export default App;
