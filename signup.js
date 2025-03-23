/* signup.js */
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
  
    // Simulate storing user data (replace with actual backend logic)
    console.log('Signup:', { username, email, password });
    alert('Signup successful!');
    window.location.href = 'login.html';
  });