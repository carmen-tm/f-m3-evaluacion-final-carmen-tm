import React from 'react';
import PropTypes from 'prop-types';
import FiltersList from '../../components/FiltersList';
import CharactersList from '../../components/CharactersList';
import './styles.scss';

//Replace vertical scroll by horizontal scroll with just vanilla javascript
function handleReplaceVerticalScroll(event) {
	// The deltaY property returns a positive value when scrolling down, and a negative value when scrolling up, otherwise 0
	//If truthy (there is scroll..)
	if (event.deltaY) {
		// manually scroll horizonally instead
		window.scroll(window.scrollX + event.deltaY * 5, window.scrollY);
	}
	//Otherwise (no vertical scroll) do nothing
	return;
}

//Listener on window element
window.addEventListener('wheel', handleReplaceVerticalScroll);

const HomePage = props => {
	const { isFetching, dataArr, onChangeFilter, valueFilter } = props;
	return (
		<React.Fragment>
			<header>
				<h1 className="App__title">Harry Potter Characters</h1>
			</header>
			{isFetching ? (
				//If it is fetching(T), show loading paragraph
				<main>
					<p>Loading...</p>
				</main>
			) : (
				<main className="App__container">
					<FiltersList
						dataArr={dataArr}
						onChangeFilter={onChangeFilter}
						valueFilter={valueFilter}
					/>
					<CharactersList dataArr={dataArr} valueFilter={valueFilter} />
				</main>
			)}
		</React.Fragment>
	);
};

HomePage.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	dataArr: PropTypes.array.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
	valueFilter: PropTypes.string.isRequired
};

export default HomePage;
