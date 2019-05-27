import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import getHouseLogo from '../../services/getHouseLogo';

import './styles.scss';

//For using awesome fonts directly
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHeart,
	faSkull,
	faSkullCrossbones,
	faScroll,
	faPlus,
	faBirthdayCake,
	faMagic
} from '@fortawesome/free-solid-svg-icons';
library.add(
	faHeart,
	faSkull,
	faSkullCrossbones,
	faScroll,
	faPlus,
	faBirthdayCake,
	faMagic
);

class CharacterDetailPage extends React.Component {
	componentWillUnmount() {
		this.props.resetFiltersState();
	}

	render() {
		const { props } = this;

		const { isFetching, dataArr, match } = props;
		const { characterId } = match.params;

		const getSelectedCharacter = characterId => {
			return dataArr.find(character => character.id === parseInt(characterId));
		};

		const nextCharacter = parseInt(characterId) + 1;
		const prevCharacter = parseInt(characterId) - 1;

		const iconRotated = {
			transform: 'rotate(45deg)'
		};

		//Another way
		// const selectedCharacter = dataArr[characterId - 1];

		return (
			<div className="App__detail">
				<header>
					<Link
						to="/"
						className="detail__title"
						title="Back to the Characters list"
					>
						<div className="animation-container">
							<span className="detail__title-icon"> {'<'} </span>
						</div>

						<span className="detail__title-text"> Home</span>
					</Link>
				</header>
				{isFetching ? (
					//If it is fetching(T), show loading component
					<Loading />
				) : (
					<main className="detail-main">
						<aside className="detail-main__aside-left">
							<img
								className="detail-main__image"
								src={getSelectedCharacter(characterId).image}
								alt={getSelectedCharacter(characterId).name}
							/>
						</aside>

						<section className="detail-main__section-right">
							<header className="title__container">
								<h2 className="character__title">
									{getSelectedCharacter(characterId).name}
								</h2>
							</header>

							<h3 className="detail-main__animation-big">
								{getSelectedCharacter(characterId).house ? (
									getSelectedCharacter(characterId).house
								) : (
									<div>
										<FontAwesomeIcon
											icon="plus"
											style={iconRotated}
											title="No data"
										/>
									</div>
								)}
							</h3>

							<img
								className="detail-main__house"
								src={getHouseLogo(getSelectedCharacter(characterId).house)}
								alt={getSelectedCharacter(characterId).house}
							/>
							<div>
								<span>
									<FontAwesomeIcon icon="birthday-cake" /> Date of Birth:
								</span>
								<span className="detail-main__animation">
									{getSelectedCharacter(characterId).dateOfBith ? (
										getSelectedCharacter(characterId).dateOfBith
									) : (
										<div>
											<FontAwesomeIcon
												icon="plus"
												style={iconRotated}
												title="No data"
											/>
										</div>
									)}
								</span>
							</div>

							<div>
								<span>
									<FontAwesomeIcon icon="magic" /> Patronus:{' '}
								</span>
								<span className="detail-main__animation">
									{getSelectedCharacter(characterId).patronus ? (
										getSelectedCharacter(characterId).patronus
									) : (
										<div>
											<FontAwesomeIcon
												icon="plus"
												style={iconRotated}
												title="No data"
											/>
										</div>
									)}
								</span>
							</div>
							{/* <span className="awesome-font">
								<FontAwesomeIcon icon="heart" />
								<FontAwesomeIcon icon="scroll" />
								<FontAwesomeIcon icon="birthday-cake" />
								<FontAwesomeIcon icon="magic" />
								<FontAwesomeIcon icon="skull-crossbones" />
								<FontAwesomeIcon icon="plus" style={iconRotated} />
								<FontAwesomeIcon icon="skull" />
							</span> */}
							<div>
								{getSelectedCharacter(characterId).alive ? (
									<div>
										<span>
											<FontAwesomeIcon icon="heart" />
										</span>
										<span className="detail-main__animation">
											{' '}
											Alive at the end of the saga
										</span>
									</div>
								) : (
									<div>
										<span>
											<FontAwesomeIcon icon="skull-crossbones" />
										</span>
										<span> Dead at the end of the saga</span>
									</div>
								)}
							</div>

							{/* <Link
								to={`/character-detail/${nextCharacter}`}
								title="Back to the Characters list"
							>
								{`Next Character >`}
							</Link>
							<Link
								to={`/character-detail/${nextCharacter}`}
								title="Back to the Characters list"
							>
								{`< Previous Character`}
							</Link> */}
						</section>
					</main>
				)}
			</div>
		);
	}
}

CharacterDetailPage.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	dataArr: PropTypes.array.isRequired,
	resetFiltersState: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired
};

export default CharacterDetailPage;
