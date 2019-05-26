import React from 'react';
import PropTypes from 'prop-types';
import FilterInput from '../FilterInput';
import './styles.scss';

const FilterList = props => {
	const { onChangeFilter, valueFilter } = props;

	return (
		<aside>
			<form className="characters-filters">
				<legend> > Search your favourite character</legend>
				<FilterInput
					inputType="text"
					name="name"
					valueFilter={valueFilter}
					onChangeFilter={onChangeFilter}
				/>
			</form>
		</aside>
	);
};

FilterInput.propTypes = {
	onChangeFilter: PropTypes.func.isRequired,
	valueFilter: PropTypes.string.isRequired
};

export default FilterList;
