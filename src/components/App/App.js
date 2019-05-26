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
			filters: {
				value: ''
			}
		};

		this.handleFilterOnChange = this.handleFilterOnChange.bind(this);
		this.resetFiltersState = this.resetFiltersState.bind(this);
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
		currentTarget.classList.toggle('filter-input-focused');
		const value = currentTarget.value;

		this.setState(prevState => {
			return {
				filters: {
					//Doing prevState as expecting more keys in the future
					...prevState.filters,
					value: value
				}
			};
		});
	}

	resetFiltersState() {
		this.setState(prevState => {
			return {
				filters: {
					...prevState.filters,
					value: ''
				}
			};
		});
	}

	render() {
		const { dataArr, isFetching } = this.state.data;
		const { handleFilterOnChange, resetFiltersState } = this;
		const { value } = this.state.filters;
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
									valueFilter={value}
								/>
							);
						}}
					/>
					<Route
						exact
						path="/character-detail/:characterId"
						render={routerProps => (
							<CharacterDetailPage
								isFetching={isFetching}
								resetFiltersState={resetFiltersState}
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
