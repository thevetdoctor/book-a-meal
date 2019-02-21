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
		console.log(response)
		display.innerHTML = response.message;
		window.localStorage.token = response.token;
    	form.style.display = 'none';
		})
		.catch(error => { console.log(error)
		display.innerHTML = `${error}`});
}

login.addEventListener('click', logIn);