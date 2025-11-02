const backendURL = 'https://eight32301313-concacts-backend-6.onrender.com';

function login() {
  fetch(`${backendURL}/api/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      localStorage.setItem('user_id', data.user_id);
      window.location.href = 'contacts.html';
    } else {
      alert(data.message);
    }
  });
}

function register() {
  fetch(`${backendURL}/api/register`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.success ? "Register success! Please login." : data.message);
  });
}

