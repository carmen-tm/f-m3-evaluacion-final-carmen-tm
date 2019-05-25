import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const CharacterDetailPage = props => {
	const { isFetching, dataArr, match } = props;
	const { characterId } = match.params;

	const selectedCharacter = dataArr[characterId - 1];

	return (
		<div>
			<h2>Página de detalle</h2>
			{isFetching ? (
				<main>
					<p>Loading...</p>
				</main>
			) : (
				<main>
					<img src={selectedCharacter.image} alt={selectedCharacter.name} />
					<h3>{selectedCharacter.name}</h3>
					<p>
						House:{' '}
						{selectedCharacter.house ? selectedCharacter.house : 'No data'}
					</p>
					<p>
						Date of Birth:{' '}
						{selectedCharacter.dateOfBith
							? selectedCharacter.dateOfBith
							: 'No data'}
					</p>
					<p>
						Patronus:{' '}
						{selectedCharacter.patronus
							? selectedCharacter.patronus
							: 'No data'}
					</p>
					<p>Alive: {selectedCharacter.alive ? 'ALIVE' : 'DEAD'}</p>

					<Link to="/"> Home </Link>
				</main>
			)}
		</div>
	);
};

CharacterDetailPage.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	dataArr: PropTypes.array.isRequired,
	match: PropTypes.object.isRequired
};

export default CharacterDetailPage;
