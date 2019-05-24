import React from 'react';
import PropTypes from 'prop-types';
import FiltersList from '../../components/FiltersList';
import CharacterList from '../../components/CharacterList';
import './styles.scss';

const HomePage = props => {
	const { dataArr, onChangeFilter, valueFilter } = props;
	return (
		<div>
			<h2>Characters List</h2>
			<FiltersList onChangeFilter={onChangeFilter} valueFilter={valueFilter} />
			<CharacterList dataArr={dataArr} />
		</div>
	);
};

HomePage.propTypes = {
	dataArr: PropTypes.array.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
	valueFilter: PropTypes.string //Not required yet
};

export default HomePage;
