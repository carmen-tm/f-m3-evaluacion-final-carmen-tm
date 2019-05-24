import React from 'react';
import fetchCharacter from '../../services/API-service';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../containers/HomePage';
import CharacterDetailPage from '../../containers/CharacterDetailPage';
import './App.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				dataArr: [],
				isFetching: true
			},
			filters: {}
		};

		this.handleFilterOnChange = this.handleFilterOnChange.bind(this);
	}

	componentDidMount() {
		fetchCharacter().then(data => {
			this.setState((prevState, index) => {
				return {
					data: {
						//Boolean for Loading text
						isFetching: false,
						dataArr: data.map((character, index) => {
							return {
								...character,
								id: index + 1
							};
						})
					}
				};
			});
		});
	}

	handleFilterOnChange(event) {
		const { currentTarget } = event;
		const key = currentTarget.name;
		const value = currentTarget.value;

		this.setState(prevState => {
			return {
				filters: {
					//Doing prevState as expecting more keys in the future
					...prevState.filters,
					[key]: value
				}
			};
		});
	}

	render() {
		const { dataArr, isFetching } = this.state.data;
		const { handleFilterOnChange } = this;
		const { name } = this.state.filters;
		return (
			<div className="App">
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							return (
								<HomePage
									isFetching={isFetching}
									dataArr={dataArr}
									onChangeFilter={handleFilterOnChange}
									valueFilter={name}
								/>
							);
						}}
					/>
					<Route
						exact
						path="/character/:characterId"
						render={routerProps => (
							<CharacterDetailPage
								dataArr={dataArr}
								match={routerProps.match}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
