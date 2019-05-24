import React from 'react';
import PropTypes from 'prop-types';
import FilterInput from '../FilterInput';
import './styles.scss';

const FilterList = props => {
	const { onChangeFilter, valueFilter } = props;

	return (
		<div>
			<h2>Filters</h2>
			<ul>
				<li>
					<FilterInput
						inputType="text"
						name="name"
						valueFilter={valueFilter}
						onChangeFilter={onChangeFilter}
					/>
				</li>
			</ul>
		</div>
	);
};

FilterInput.propTypes = {
	onChangeFilter: PropTypes.func.isRequired,
	valueFilter: PropTypes.string //Not required yet
};

export default FilterList;
