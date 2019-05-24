import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard';

import './styles.scss';

const CharactersList = props => {
	const { dataArr } = props;
	return (
		<div>
			<h2>Characters collection</h2>

			<ul>
				{dataArr.map(character => {
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
	dataArr: PropTypes.array.isRequired
};

export default CharactersList;
