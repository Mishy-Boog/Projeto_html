document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('closeModal');
    const modalMessage = document.getElementById('modalMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            const usuarioData = localStorage.getItem(email);

            
            if (usuarioData) {
                const parsedUserData = JSON.parse(usuarioData);

                
                if (parsedUserData.senha === senha) {
                    showModal('Login realizado com sucesso!');
                    
                   
                    localStorage.setItem('email', email);

                    setTimeout(function () {
                        window.location.href = 'caverna.htm'; 
                    }, 2000); 
                } else {
                    showModal('Senha incorreta!');
                }
            } else {
                showModal('Usuário não encontrado!');
            }
        });
    }

    
    function showModal(message) {
        modalMessage.innerText = message;
        modal.style.display = 'flex';
    }

    
    if (closeModalButton) {
        closeModalButton.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }
});
