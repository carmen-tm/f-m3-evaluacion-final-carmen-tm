import React from 'react';
import PropTypes from 'prop-types';
import FiltersList from '../../components/FiltersList';
import CharactersList from '../../components/CharactersList';
import './styles.scss';

const HomePage = props => {
	const { isFetching, dataArr, onChangeFilter, valueFilter } = props;
	return (
		<div>
			<h2>Characters List</h2>
			{isFetching ? (
				//If it is fetching (true), show loading paragraph meanwhile
				<main>
					<p>Loading...</p>
				</main>
			) : (
				<main>
					<FiltersList
						dataArr={dataArr}
						onChangeFilter={onChangeFilter}
						valueFilter={valueFilter}
					/>
					<CharactersList dataArr={dataArr} />
				</main>
			)}
		</div>
	);
};

HomePage.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	dataArr: PropTypes.array.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
	valueFilter: PropTypes.string //Not required yet
};

export default HomePage;
