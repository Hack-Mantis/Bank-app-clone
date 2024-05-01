// myBankscript.js
document.querySelector('.login-form form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Login attempted with username:', username, 'and password:', password);

    // Here you would typically handle the login with a server
    alert('Login functionality not implemented yet!');
});