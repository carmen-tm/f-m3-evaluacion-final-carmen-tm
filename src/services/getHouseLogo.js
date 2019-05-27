import noun_Gryffindor from '../images/noun_Gryffindor.svg';
import noun_Hufflepuff from '../images/noun_Hufflepuff.svg';
import noun_Ravenclaw from '../images/noun_Ravenclaw.svg';
import noun_Slytherin from '../images/noun_Slytherin.svg';

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

export default getHouseLogo;
