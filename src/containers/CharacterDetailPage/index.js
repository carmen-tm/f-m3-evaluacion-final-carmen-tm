import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const CharacterDetailPage = props => {
	const { isFetching, dataArr, match } = props;
	const { characterId } = match.params;

	const getSelectedCharacter = characterId => {
		return dataArr.find(character => character.id === parseInt(characterId));
	};

	//Another way
	// const selectedCharacter = dataArr[characterId - 1];

	return (
		<div className="App__detail">
			<header>
				<Link to="/"> Home </Link>
				<h2>Página de detalle</h2>
			</header>
			{isFetching ? (
				<main>
					<p>Loading...</p>
				</main>
			) : (
				<main className="detail-main">
					<aside>
						<img
							src={getSelectedCharacter(characterId).image}
							alt={getSelectedCharacter(characterId).name}
						/>
					</aside>
					<section>
						<h3>{getSelectedCharacter(characterId).name}</h3>
						<p>
							House:{' '}
							{getSelectedCharacter(characterId).house
								? getSelectedCharacter(characterId).house
								: '(No data)'}
						</p>
						<p>
							Date of Birth:{' '}
							{getSelectedCharacter(characterId).dateOfBith
								? getSelectedCharacter(characterId).dateOfBith
								: '(No data)'}
						</p>
						<p>
							Patronus:{' '}
							{getSelectedCharacter(characterId).patronus
								? getSelectedCharacter(characterId).patronus
								: '(No data)'}
						</p>
						<p>
							{getSelectedCharacter(characterId).alive
								? 'Alive at the end of the saga'
								: 'Dead at the end of the saga'}
						</p>
					</section>
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
