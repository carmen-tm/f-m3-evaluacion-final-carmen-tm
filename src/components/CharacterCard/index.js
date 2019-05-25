import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const CharacterCard = props => {
	const { character } = props;
	const { id, name, image, house } = character;
	return (
		<Link
			to={`/character-detail/${id}`}
			title="Show more info"
			className="character-card__link"
		>
			<div className="character-card">
				<header>
					<img className="character-card__img" src={image} alt={name} />
				</header>
				<main>
					<h3 className="character-card__title">{name}</h3>
					<p className="character-card__info">
						{house ? house : <span>&nbsp;&nbsp;</span>}
					</p>
				</main>
			</div>
		</Link>
	);
};

CharacterCard.propTypes = {
	character: PropTypes.object.isRequired
};

export default CharacterCard;
