import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const CharacterDetailPage = props => {
	return (
		<div>
			<h2>Página de detalle</h2>
			<Link to="/"> Home </Link>
		</div>
	);
};

export default CharacterDetailPage;
