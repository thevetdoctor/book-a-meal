// ui/shared.js

const getUrl = () => {
	if(window.location.host.indexOf('localhost') > -1){
		return 'http://localhost:5000/';
	} else {
		return 'https://meal-bookers.herokuapp.com/';
	}
}

const apiUrl = getUrl();