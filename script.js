const users = [];
function signup(e) {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert('User already exists! Please sign in.');
        return false;
    }
    users.push({ username, email, password });
    alert('Sign up successful! You can now sign in.');
    toggleForms();
    return false; 
}
function signin(e) {
    e.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert(`Form Sign in Sucessfully !`);
    } else {
        alert('Invalid email or password.');
        myForm1.reset();
    }
    return false; 
}
function toggleForms() {
    const signupForm = document.getElementById('myForm');
    const signinForm = document.getElementById('myForm1');
    signupForm.classList.toggle('hidden');
    signinForm.classList.toggle('hidden');
}
document.getElementById('switch-to-signin').addEventListener('click', (event) => {
    event.preventDefault();
    toggleForms();
});

document.getElementById('switch-to-signup').addEventListener('click', (event) => {
    event.preventDefault();
    toggleForms();
});
