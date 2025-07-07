// Função para salvar a ficha no localStorage
function salvarFicha() {
    
    const dados = {
        
        personagem: document.getElementById("personagem").value,

       
        habConj: parseInt(document.getElementById("hab-conj").value) || 0,
        cdResistenciaMagia: parseInt(document.getElementById("cd").value) || 0,
        bonusAtqMag: parseInt(document.getElementById("bonus-atq-mag").value) || 0,

        
        truques: [
            document.getElementById("truque1").value,
            document.getElementById("truque2").value,
            document.getElementById("truque3").value,
            document.getElementById("truque4").value,
            document.getElementById("truque5").value,
            document.getElementById("truque6").value,
            document.getElementById("truque7").value,
            document.getElementById("truque8").value,
            document.getElementById("truque9").value,
            document.getElementById("truque10").value
        ],

        
        magias: []
    };

    
    for (let i = 1; i <= 9; i++) {
        const nivelMagia = {
            nivMag: parseInt(document.getElementById(`niv-mag${i}`).value) || 0,
            totEsp: parseInt(document.getElementById(`tot-esp${i}`).value) || 0,
            espGast: parseInt(document.getElementById(`esp-gast${i}`).value) || 0,
            magiasConhecidas: []
        };

        
        for (let j = 1; j <= 13; j++) {
            const magiaId = `n-mag${(i - 1) * 13 + j}`;
            const magiaCheckId = `n-mag${(i - 1) * 13 + j}-check`;

            const magia = {
                nome: document.getElementById(magiaId) ? document.getElementById(magiaId).value : "",
                checked: document.getElementById(magiaCheckId) ? document.getElementById(magiaCheckId).checked : false
            };

            nivelMagia.magiasConhecidas.push(magia);
        }

        dados.magias.push(nivelMagia);
    }

    try {
        
        localStorage.setItem('ficha', JSON.stringify(dados));
        alert('Ficha salva com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar a ficha:', error);
        alert('Erro ao salvar a ficha!');
    }
}


function carregarFicha() {
    const dados = JSON.parse(localStorage.getItem('ficha'));

    if (dados) {
        
        document.getElementById("personagem").value = dados.personagem || '';

       
        document.getElementById("hab-conj").value = dados.habConj || 0;
        document.getElementById("cd").value = dados.cdResistenciaMagia || 0;
        document.getElementById("bonus-atq-mag").value = dados.bonusAtqMag || 0;

        
        dados.truques.forEach((truque, index) => {
            if (truque && document.getElementById(`truque${index + 1}`)) {
                document.getElementById(`truque${index + 1}`).value = truque;
            }
        });

        
        dados.magias.forEach((nivelMagia, index) => {
            
            document.getElementById(`niv-mag${index + 1}`).value = nivelMagia.nivMag || 0;
            document.getElementById(`tot-esp${index + 1}`).value = nivelMagia.totEsp || 0;
            document.getElementById(`esp-gast${index + 1}`).value = nivelMagia.espGast || 0;

            
            nivelMagia.magiasConhecidas.forEach((magia, magIndex) => {
                const magiaId = `n-mag${(index * 13) + magIndex + 1}`;
                const magiaCheckId = `n-mag${(index * 13) + magIndex + 1}-check`;

                if (document.getElementById(magiaId)) {
                    document.getElementById(magiaId).value = magia.nome || "";
                    document.getElementById(magiaCheckId).checked = magia.checked || false;
                }
            });
        });

        alert('Ficha carregada com sucesso!');
    } else {
        alert('Nenhuma ficha salva encontrada.');
    }
}


document.addEventListener("DOMContentLoaded", function () {
    
    const salvarButton = document.getElementById("salvarFicha");
    if (salvarButton) {
        salvarButton.addEventListener("click", salvarFicha);
    } else {
        console.error("Botão 'Salvar Ficha' não encontrado!");
    }

   
    const carregarButton = document.getElementById("carregar");
    if (carregarButton) {
        carregarButton.addEventListener("click", carregarFicha);
    } else {
        console.error("Botão 'Carregar Ficha' não encontrado!");
    }

    
    carregarFicha();
});
