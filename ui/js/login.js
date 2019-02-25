// login.js

   const login  = document.querySelector('#login'),
     loginEmail = document.querySelector('#loginEmail'),
  loginPassword = document.querySelector('#loginPassword'),
        display = document.querySelector('.display'),
       greeting = document.querySelector('#greeting'),
           form = document.querySelector('form'),
       loginUrl = `${apiUrl}auth/users/login`;


const logIn = (e, _url, user) => {
	e.preventDefault();

	user = { email: loginEmail.value,
			password: loginPassword.value
		};

		if(user.email === undefined || user.password === undefined) {
			greeting.innerHTML = `Please enter email/password`;
			return;
		}
	fetch(loginUrl, {
		method: 'POST',
		// mode: 'no-cors',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json'
			}
		})
		.then(res => res.json())
		.then((response) => {
		console.log(response);
		greeting.innerHTML = response.message;
		window.localStorage.token = response.token;
		if (response.message === 'Login successful' && response.user.isAdmin) {
			window.location.href = './meals.html';
   			} else if(response.message === 'Login successful') {
			window.location.href = './user.html';
			   }
		})
		.catch(error => {
			console.log(error);
		greeting.innerHTML = `Login failed`;
	});
}

login.addEventListener('click', logIn);