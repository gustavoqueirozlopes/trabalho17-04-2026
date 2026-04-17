// Envio do formulário
document.getElementById('contatoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    
    if (nome) {
        alert(`✅ Obrigado, ${nome}! Sua mensagem foi enviada com sucesso!`);
        this.reset(); // Limpa o formulário
    } else {
        alert("Por favor, preencha seu nome.");
    }
});

// Mensagem no console
console.log("%cBem-vindo ao portfólio de João Mendes! 🚀", 
    "color: #4a6bdf; font-size: 16px; font-weight: bold;");

// Botão flutuante para Modo Escuro
const btnDark = document.createElement('button');
btnDark.textContent = '🌙';
btnDark.style.position = 'fixed';
btnDark.style.bottom = '30px';
btnDark.style.right = '30px';
btnDark.style.width = '55px';
btnDark.style.height = '55px';
btnDark.style.borderRadius = '50%';
btnDark.style.border = 'none';
btnDark.style.fontSize = '1.6rem';
btnDark.style.cursor = 'pointer';
btnDark.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
btnDark.style.zIndex = '999';
document.body.appendChild(btnDark);

let darkMode = false;

btnDark.addEventListener('click', () => {
    darkMode = !darkMode;
    
    if (darkMode) {
        document.documentElement.style.setProperty('--cor-fundo', '#1a1a2e');
        document.documentElement.style.setProperty('--cor-texto', '#e0e0e0');
        btnDark.textContent = '☀️';
    } else {
        document.documentElement.style.setProperty('--cor-fundo', '#f8f9fa');
        document.documentElement.style.setProperty('--cor-texto', '#333');
        btnDark.textContent = '🌙';
    }
});
