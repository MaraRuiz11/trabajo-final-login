// Cambio de formularios
function showSignUp() {
    document.querySelector('.sign-in').classList.add('hidden');
    document.querySelector('.sign-up').classList.remove('hidden');
    document.querySelector('.welcome-sign-up').style.display = 'none';
    document.querySelector('.welcome-sign-in').style.display = 'block';
}

function showSignIn() {
    document.querySelector('.sign-up').classList.add('hidden');
    document.querySelector('.sign-in').classList.remove('hidden');
    document.querySelector('.welcome-sign-in').style.display = 'none';
    document.querySelector('.welcome-sign-up').style.display = 'block';
}

// Validación del login
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');

    if (loginBtn) {
        loginBtn.addEventListener('click', function (event) {
            event.preventDefault();

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            const validEmail = "usuario@ejemplo.com";
            const validPassword = "123456";

            if (email === validEmail && password === validPassword) {
                window.location.href = "";
            } else {
                alert("Correo o contraseña incorrectos.");
            }
        });
    }
});
