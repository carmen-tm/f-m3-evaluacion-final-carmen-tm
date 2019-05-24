import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard';

import './styles.scss';

const CharactersList = props => {
	const { dataArr, valueFilter } = props;
	return (
		<div>
			<h2>Characters collection</h2>

			<ul>
				{dataArr
					.filter(character => {
						return valueFilter
							? character.name.toUpperCase().includes(valueFilter.toUpperCase())
							: true;
					})
					.map(character => {
						return (
							<li key={character.id}>
								<CharacterCard character={character} />
							</li>
						);
					})}
			</ul>
		</div>
	);
};

CharactersList.propTypes = {
	valueFilter: PropTypes.string.isRequired,
	dataArr: PropTypes.array.isRequired
};

export default CharactersList;
