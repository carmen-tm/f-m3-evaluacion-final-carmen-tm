import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard';

import './styles.scss';

const CharacterList = props => {
	const { dataArr } = props;
	return (
		<div>
			<h2>Characters collection</h2>
			<ul />
			<CharacterCard character={{}} />
		</div>
	);
};

CharacterList.propTypes = {
	dataArr: PropTypes.array.isRequired
};

export default CharacterList;
