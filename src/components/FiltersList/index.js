import React from 'react';
import PropTypes from 'prop-types';
import FilterInput from '../FilterInput';
import './styles.scss';

const FilterList = props => {
	const { onChangeFilter, valueFilter } = props;

	return (
		<div>
			<h2>Filters</h2>
			<form>
				<FilterInput
					inputType="text"
					name="name"
					valueFilter={valueFilter}
					onChangeFilter={onChangeFilter}
				/>
			</form>
		</div>
	);
};

FilterInput.propTypes = {
	onChangeFilter: PropTypes.func.isRequired,
	valueFilter: PropTypes.string.isRequired
};

export default FilterList;
