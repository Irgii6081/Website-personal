const loginForm = document.getElementById('login-form');
    const loginButton = document.getElementById('login-button');
    let loginAttempts = 0;
    let loginDisabled = false;
    
    loginButton.addEventListener('click', () => {
      if (loginDisabled) {
        alert('Anda telah melampaui batas percobaan. Silakan tunggu 30 detik.');
        return;
      }
      
      const username = loginForm.username.value;
      const password = loginForm.password.value;
      
      if (username.length < 8 || password.length < 8) {
        alert('Username dan password harus memiliki minimal 8 karakter.');
        return;
      }
      const users = [
        { username: 'User1234', password: 'password1' },
        { username: 'Alok-gaming', password: 'alokepep123' },
        { username: 'kontolcicak', password: 'kontolcicak' },
        { username: 'user4', password: 'pass4' },
        { username: 'user5', password: 'pass5' }
        // Daftar pengguna lainnya
      ];
      
      const user = users.find(u => u.username === username && u.password === password);
      if (!user) {
        loginAttempts++;
        if (loginAttempts >= 4) {
          loginDisabled = true;
          setTimeout(() => {
            loginDisabled = false;
            loginAttempts = 0;
          }, 30000); // Batas waktu 30 detik
        }
        alert('Username atau password salah.');
      } else {
        localStorage.setItem('loggedInUsername', username);
        sessionStorage.setItem('loggedInPassword', password);
        window.location.href = 'index.html';
      }
    });
    {}