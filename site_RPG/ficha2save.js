
function salvarFicha() {
    const dados = {
        personagem: document.getElementById("personagem").value,
        idade: parseInt(document.getElementById("idade").value) || 0,
        altura: parseInt(document.getElementById("altura").value) || 0,
        peso: parseInt(document.getElementById("peso").value) || 0,
        olhos: document.getElementById("olhos").value,
        pele: document.getElementById("pele").value,
        cabelo: document.getElementById("cabelo").value,
        conte9: document.getElementById("conte9").value,
        conte10: document.getElementById("conte10").value,
        conte11: document.getElementById("conte11").value,
        conte12: document.getElementById("conte12").value,
        conte13: document.getElementById("conte13").value,
    };

    try {
        
        localStorage.setItem('ficha2', JSON.stringify(dados));
        alert('Ficha salva com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar a ficha:', error);
        alert('Erro ao salvar a ficha!');
    }
}


function carregarFicha() {
    const dados = JSON.parse(localStorage.getItem('ficha2'));

    if (dados) {
        
        document.getElementById("personagem").value = dados.personagem || '';
        document.getElementById("idade").value = dados.idade || 0;
        document.getElementById("altura").value = dados.altura || 0;
        document.getElementById("peso").value = dados.peso || 0;
        document.getElementById("olhos").value = dados.olhos || '';
        document.getElementById("pele").value = dados.pele || '';
        document.getElementById("cabelo").value = dados.cabelo || '';
        document.getElementById("conte9").value = dados.conte9 || '';
        document.getElementById("conte10").value = dados.conte10 || '';
        document.getElementById("conte11").value = dados.conte11 || '';
        document.getElementById("conte12").value = dados.conte12 || '';
        document.getElementById("conte13").value = dados.conte13 || '';

        alert('Ficha carregada com sucesso!');
    } else {
        alert('Nenhuma ficha salva encontrada.');
    }
}


document.addEventListener("DOMContentLoaded", function () {
    carregarFicha();
});
