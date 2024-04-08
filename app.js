document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.querySelector('.sign-in-form');
    
    signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const username = signInForm.querySelector('input[type="text"]').value;
      const password = signInForm.querySelector('input[type="password"]').value;
  
      // Replace 'YOUR_ENDPOINT_URL' with the URL where your server handles the login check
      fetch('https://yuvi-raj-p.github.io/ScoutingFRC-Bot/user.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then(response => response.json())
      .then(data => {
        if (data.loginSuccess) {
          alert('Login successful!');
          // Redirect to another page or perform any other action
        } else {
          alert('Invalid username or password.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  });
  
