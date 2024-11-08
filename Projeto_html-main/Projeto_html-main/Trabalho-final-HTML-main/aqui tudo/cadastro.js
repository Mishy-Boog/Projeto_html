document.addEventListener('DOMContentLoaded', function () {
    const cadastroForm = document.getElementById('cadastroForm');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modalMessage');
    const closeModalButton = document.getElementById('closeModal');
    
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const usuario = document.getElementById('usuario').value;
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            const senhaConfirmar = document.getElementById('senha-confirmar').value;

            
            if (senha !== senhaConfirmar) {
                showModal('As senhas não coincidem!');
                return;
            }

            
            const usuarioExistente = localStorage.getItem(email);
            if (usuarioExistente) {
                showModal('Este email já está cadastrado!');
                return;
            }

            
            const usuarioData = { usuario, email, senha };
            localStorage.setItem(email, JSON.stringify(usuarioData));

            
            localStorage.setItem('email', email); 

            showModal('Cadastro realizado com sucesso!');

            
            setTimeout(function () {
                window.location.href = 'index.htm'; 
            }, 2000); 
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
