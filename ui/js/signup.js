// ui/app.js

    const signup = document.querySelector('#signup'),
         display = document.querySelector('.display'),
        greeting = document.querySelector('#greeting'),
            form = document.querySelector('form');
      signupName = document.querySelector('#signupName'),
     signupEmail = document.querySelector('#signupEmail'),
  signupPassword = document.querySelector('#signupPassword'),
        signupUrl = `${apiUrl}auth/users/signup`;


const signUp = (e, _url, user) => {
	e.preventDefault();

	    user = {
		name: signupName.value,
		email: signupEmail.value,
		password: signupPassword.value
	}

		console.log(user);

	fetch(signupUrl, {
		method: 'POST',
		// mode: 'no-cors',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json'
			}
		})
	.then(res => res.json())
	.then((response) => {
		greeting.innerHTML = response.message;
		if (response.message === 'New User created') {
			window.location.href = './user.html';
		}
	})
	.catch(error => { 
		console.log(error);
		greeting.innerHTML = `${error}`;
	});
}

signup.addEventListener('click', signUp);