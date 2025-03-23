/* login.js */
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    // Simulate authentication (replace with actual backend logic)
    console.log('Login:', { username, password });
    alert('Login successful!');
    window.location.href = 'index.html'; // Redirect to home page after login
  });