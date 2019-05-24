import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const CharacterDetailPage = props => {
	const { dataArr, match } = props;
	const { characterId } = match.params;

	const selectedCharacter = dataArr[characterId - 1];
	const { name, image, house, dateOfBith, patronus, alive } = selectedCharacter;

	return (
		<div>
			<h2>Página de detalle</h2>
			<img src={image} alt={name} />
			<h3>{name}</h3>
			<p>House: {house ? house : 'No data'}</p>
			<p>Date of Birth: {dateOfBith ? dateOfBith : 'No data'}</p>
			<p>Patronus: {patronus ? patronus : 'No data'}</p>
			<p>Alive: {alive ? 'ALIVE' : 'DEAD'}</p>

			<Link to="/"> Home </Link>
		</div>
	);
};

CharacterDetailPage.propTypes = {
	dataArr: PropTypes.array.isRequired,
	match: PropTypes.object.isRequired
};

export default CharacterDetailPage;
