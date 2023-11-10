document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aqui você pode adicionar sua lógica de verificação de login
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === 'seu_usuario' && password === 'sua_senha') {
        // Login bem-sucedido
        alert('Login bem-sucedido! Redirecionando...');
        // Adicione o redirecionamento para a página principal do seu site aqui
    } else {
        // Login falhou
        alert('Nome de usuário ou senha incorretos. Tente novamente.');
    }
});
