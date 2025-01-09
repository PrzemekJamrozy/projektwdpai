// Przełączanie widoków
document.getElementById('register-link').addEventListener('click', () => {
    showScreen('register-screen');
});

document.getElementById('login-link').addEventListener('click', () => {
    showScreen('login-screen');
});

document.getElementById('logout-button').addEventListener('click', () => {
    showScreen('login-screen');
});

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Obsługa logowania
document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Przykład żądania Fetch API
    const response = await fetch('/api/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (data.success) {
        document.getElementById('user-name').textContent = username;
        showScreen('main-screen');
    } else {
        alert('Nieprawidłowe dane logowania.');
    }
});
