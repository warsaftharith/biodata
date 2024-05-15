document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctUsername = 'dina';
    const correctPassword = 'dina';

    const usernameRegex = /^[a-zA-Z\s]+$/;

    if (!usernameRegex.test(username)) {
        showNotification('Format username salah! Gunakan hanya huruf dan spasi.', true);
        return;
    }

    if (username === correctUsername && password === correctPassword) {
        showNotification('Login berhasil! Anda akan di arahkan ke halaman form biodata.');
        setTimeout(() => {
            window.location.href = '/assets/biodata.html';
        }, 2000); 
    } else {
        showNotification('Username atau password salah!', true);
    }
});

function showNotification(message, isError = false) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.backgroundColor = isError ? '#f44336' : '#4caf50';
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}