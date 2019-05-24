import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import './styles.scss';

const CharacterCard = props => {
	const { character } = props;
	return (
		<div>
			<p>Soy una carta</p>
			{/* <p>{character}</p> */}
		</div>
	);
};

{
	/* <Link to="/character/ej"> Página detalle </Link> */
}

CharacterCard.propTypes = {
	character: PropTypes.object.isRequired
};

export default CharacterCard;
