import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import noun_Gryffindor from '../../images/noun_Gryffindor.svg';
import noun_Hufflepuff from '../../images/noun_Hufflepuff.svg';
import noun_Ravenclaw from '../../images/noun_Ravenclaw.svg';
import noun_Slytherin from '../../images/noun_Slytherin.svg';

import './styles.scss';

const CharacterCard = props => {
	const { character } = props;
	const { id, name, image, house } = character;

	const getHouseLogo = house => {
		if (house === 'Gryffindor') {
			return noun_Gryffindor;
		} else if (house === 'Hufflepuff') {
			return noun_Hufflepuff;
		} else if (house === 'Ravenclaw') {
			return noun_Ravenclaw;
		} else if (house === 'Slytherin') {
			return noun_Slytherin;
		} else {
			return 'https://via.placeholder.com/50/ffffff/808080 ?Text=No-house';
		}
	};

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
					<img
						className="character-card__house"
						src={getHouseLogo(house)}
						alt={house}
					/>
				</main>
			</div>
		</Link>
	);
};

CharacterCard.propTypes = {
	character: PropTypes.object.isRequired
};

export default CharacterCard;
