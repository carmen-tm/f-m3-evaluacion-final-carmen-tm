const URL = `http://hp-api.herokuapp.com/api/characters`;

const fetchCharacter = () => {
	return fetch(URL).then(response => response.json());
};

export default fetchCharacter;
