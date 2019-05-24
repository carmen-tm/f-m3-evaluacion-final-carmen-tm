import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const CharacterCard = props => {
	const { character } = props;
	const { id, name, image, house } = character;
	return (
		<div>
			<img src={image} alt={name} />
			<h3>{name}</h3>
			<p>{house}</p>

			<Link to={`/character/${id}`}> Página detalle </Link>
		</div>
	);
};

CharacterCard.propTypes = {
	character: PropTypes.object.isRequired
};

export default CharacterCard;
