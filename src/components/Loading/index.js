import React from 'react';
import noun_HarryPotter from '../../images/noun_HarryPotter.png';

import './styles.scss';

const Loading = () => {
	return (
		<main className="loading-page">
			<img
				src={noun_HarryPotter}
				alt="Harry Potter data is loading"
				className="loading-image"
			/>
			<p className="loading-text"> Loading... </p>
		</main>
	);
};

export default Loading;
