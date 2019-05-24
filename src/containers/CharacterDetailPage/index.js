import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const CharacterDetailPage = props => {
	console.log(props);
	const { isFetching, dataArr, match } = props;
	const { characterId } = match.params;

	const selectedCharacter = dataArr[characterId - 1];
	const { name, image, house, dateOfBith, patronus, alive } = selectedCharacter;

	return (
		<div>
			<h2>Página de detalle</h2>
			{isFetching ? (
				<main>
					<p>Loading...</p>
				</main>
			) : (
				<main>
					<img src={image} alt={name} />
					<h3>{name}</h3>
					<p>House: {house ? house : 'No data'}</p>
					<p>Date of Birth: {dateOfBith ? dateOfBith : 'No data'}</p>
					<p>Patronus: {patronus ? patronus : 'No data'}</p>
					<p>Alive: {alive ? 'ALIVE' : 'DEAD'}</p>

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
