import React from 'react';
import PropTypes from 'prop-types';
import FiltersList from '../../components/FiltersList';
// import { Link } from 'react-router-dom';
import './styles.scss';

const HomePage = props => {
	const { onChangeFilter, valueFilter } = props;
	return (
		<div>
			<h2>Characters List</h2>
			<FiltersList onChangeFilter={onChangeFilter} valueFilter={valueFilter} />

			{/* <Link to="/character/ej"> Página detalle </Link> */}
		</div>
	);
};

HomePage.propTypes = {
	onChangeFilter: PropTypes.func.isRequired,
	valueFilter: PropTypes.string //Not required yet
};

export default HomePage;
