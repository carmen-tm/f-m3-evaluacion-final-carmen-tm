import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const FilterInput = props => {
	const { inputType, name, onChangeFilter, valueFilter } = props;
	return (
		<div>
			<label htmlFor={name} className="visually-hidden">
				{name}
			</label>
			<input
				className="filter-input"
				type={inputType}
				name={name}
				id={name}
				onChange={onChangeFilter}
				value={valueFilter}
				placeholder={`${name}...`}
			/>
		</div>
	);
};

FilterInput.propTypes = {
	inputType: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
	valueFilter: PropTypes.string.isRequired
};

export default FilterInput;
