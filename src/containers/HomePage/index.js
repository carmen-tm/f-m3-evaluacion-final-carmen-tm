import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const HomePage = props => {
	return (
		<div>
			<h2>Characters List</h2>
			<p>..</p>
			<Link to="/character/ej"> Página detalle </Link>
		</div>
	);
};

export default HomePage;
