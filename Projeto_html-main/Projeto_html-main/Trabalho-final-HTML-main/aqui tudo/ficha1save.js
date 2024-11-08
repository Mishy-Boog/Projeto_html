// Função para salvar a ficha no localStorage
function salvarFicha() {
   
    const ficha = {
        personagem: document.getElementById("personagem").value,
        jogador: document.getElementById("jogador").value,
        classe1: document.getElementById("classe1").value,
        nivel: document.getElementById("nivel").value,
        antecedente: document.getElementById("antecedente").value,
        raca: document.getElementById("raca").value,
        tendencia: document.getElementById("tendencia").value,
        pcExperiencia: document.getElementById("pc-experiencia").value,
        forca: document.getElementById("forca").value,
        destreza: document.getElementById("destreza").value,
        constituicao: document.getElementById("constituicao").value,
        inteligencia: document.getElementById("inteligencia").value,
        sabedoria: document.getElementById("sabedoria").value,
        carisma: document.getElementById("carisma").value,
        inspiracao: document.getElementById("inspiracao").value,
        bonusProeficiencia: document.getElementById("bonus-proeficiencia").value,
        sabPassiva: document.getElementById("sab-passiva").value,
        forcaCheck: document.getElementById("forca-check").checked,
        destrezaCheck: document.getElementById("destreza-check").checked,
        constituicaoCheck: document.getElementById("constituicao-check").checked,
        inteligenciaCheck: document.getElementById("inteligencia-check").checked,
        sabedoriaCheck: document.getElementById("sabedoria-check").checked,
        carismaCheck: document.getElementById("carisma-check").checked,
        classeArmadura: document.getElementById("classe-armadura").value,
        classeArmaduraCheck: document.getElementById("classe-armadura-check").checked,
        iniciativa: document.getElementById("iniciativa").value,
        deslocamento: document.getElementById("deslocamento").value,
        vidaMax: document.getElementById("vida-max").value,
        vidaAtual: document.getElementById("vida-atual").value,
        vidaTemporaria: document.getElementById("vida-temporaria").value,
        total: document.getElementById("total").value,
        dadoVida: document.getElementById("dado-vida").value,
        sucessos1: document.getElementById("sucessos1").checked,
        fracassos1: document.getElementById("fracassos1").checked,
        sucessos2: document.getElementById("sucessos2").checked,
        fracassos2: document.getElementById("fracassos2").checked,
        sucessos3: document.getElementById("sucessos3").checked,
        fracassos3: document.getElementById("fracassos3").checked,
        pc: document.getElementById("pc").value,
        pp: document.getElementById("pp").value,
        pe: document.getElementById("pe").value,
        po: document.getElementById("po").value,
        pl: document.getElementById("pl").value,
        acrobaciaCheck: document.getElementById("acrobacia-check").checked,
        arcanismoCheck: document.getElementById("arcanismo-check").checked,
        atletismoCheck: document.getElementById("atletismo-check").checked,
        atuacaoCheck: document.getElementById("atuacao-check").checked,
        enganacaoCheck: document.getElementById("enganacao-check").checked,
        furtividadeCheck: document.getElementById("furtividade-check").checked,
        historiaCheck: document.getElementById("historia-check").checked,
        intimidacaoCheck: document.getElementById("intimidacao-check").checked,
        intuicaoCheck: document.getElementById("intuicao-check").checked,
        investigacaoCheck: document.getElementById("investigacao-check").checked,
        adestrarAnimaisCheck: document.getElementById("adestrar-animais-check").checked,
        medicinaCheck: document.getElementById("medicina-check").checked,
        naturezaCheck: document.getElementById("natureza-check").checked,
        percepcaoCheck: document.getElementById("percepcao-check").checked,
        persuasaoCheck: document.getElementById("persuasao-check").checked,
        prestidigitacaoCheck: document.getElementById("prestidigitacao-check").checked,
        religiaoCheck: document.getElementById("religiao-check").checked,
        sobrevivenciaCheck: document.getElementById("sobrevivencia-check").checked
    };

    
    localStorage.setItem("ficha", JSON.stringify(ficha));
    alert("Ficha salva com sucesso!");
}


function carregarFicha() {
    const ficha = JSON.parse(localStorage.getItem("ficha"));
    if (ficha) {
       
        document.getElementById("personagem").value = ficha.personagem || "";
        document.getElementById("jogador").value = ficha.jogador || "";
        document.getElementById("classe1").value = ficha.classe1 || "";
        document.getElementById("nivel").value = ficha.nivel || "";
        document.getElementById("antecedente").value = ficha.antecedente || "";
        document.getElementById("raca").value = ficha.raca || "";
        document.getElementById("tendencia").value = ficha.tendencia || "";
        document.getElementById("pc-experiencia").value = ficha.pcExperiencia || "";
        document.getElementById("forca").value = ficha.forca || "";
        document.getElementById("destreza").value = ficha.destreza || "";
        document.getElementById("constituicao").value = ficha.constituicao || "";
        document.getElementById("inteligencia").value = ficha.inteligencia || "";
        document.getElementById("sabedoria").value = ficha.sabedoria || "";
        document.getElementById("carisma").value = ficha.carisma || "";
        document.getElementById("inspiracao").value = ficha.inspiracao || "";
        document.getElementById("bonus-proeficiencia").value = ficha.bonusProeficiencia || "";
        document.getElementById("sab-passiva").value = ficha.sabPassiva || "";
        
        
        document.getElementById("forca-check").checked = ficha.forcaCheck || false;
        document.getElementById("destreza-check").checked = ficha.destrezaCheck || false;
        document.getElementById("constituicao-check").checked = ficha.constituicaoCheck || false;
        document.getElementById("inteligencia-check").checked = ficha.inteligenciaCheck || false;
        document.getElementById("sabedoria-check").checked = ficha.sabedoriaCheck || false;
        document.getElementById("carisma-check").checked = ficha.carismaCheck || false;
        document.getElementById("classe-armadura").value = ficha.classeArmadura || "";
        document.getElementById("classe-armadura-check").checked = ficha.classeArmaduraCheck || false;
        document.getElementById("iniciativa").value = ficha.iniciativa || "";
        document.getElementById("deslocamento").value = ficha.deslocamento || "";
        document.getElementById("vida-max").value = ficha.vidaMax || "";
        document.getElementById("vida-atual").value = ficha.vidaAtual || "";
        document.getElementById("vida-temporaria").value = ficha.vidaTemporaria || "";
        document.getElementById("total").value = ficha.total || "";
        document.getElementById("dado-vida").value = ficha.dadoVida || "";
        document.getElementById("sucessos1").checked = ficha.sucessos1 || false;
        document.getElementById("fracassos1").checked = ficha.fracassos1 || false;
        document.getElementById("sucessos2").checked = ficha.sucessos2 || false;
        document.getElementById("fracassos2").checked = ficha.fracassos2 || false;
        document.getElementById("sucessos3").checked = ficha.sucessos3 || false;
        document.getElementById("fracassos3").checked = ficha.fracassos3 || false;
        document.getElementById("pc").value = ficha.pc || "";
        document.getElementById("pp").value = ficha.pp || "";
        document.getElementById("pe").value = ficha.pe || "";
        document.getElementById("po").value = ficha.po || "";
        document.getElementById("pl").value = ficha.pl || "";

        
        document.getElementById("acrobacia-check").checked = ficha.acrobaciaCheck || false;
        document.getElementById("arcanismo-check").checked = ficha.arcanismoCheck || false;
        document.getElementById("atletismo-check").checked = ficha.atletismoCheck || false;
        document.getElementById("atuacao-check").checked = ficha.atuacaoCheck || false;
        document.getElementById("enganacao-check").checked = ficha.enganacaoCheck || false;
        document.getElementById("furtividade-check").checked = ficha.furtividadeCheck || false;
        document.getElementById("historia-check").checked = ficha.historiaCheck || false;
        document.getElementById("intimidacao-check").checked = ficha.intimidacaoCheck || false;
        document.getElementById("intuicao-check").checked = ficha.intuicaoCheck || false;
        document.getElementById("investigacao-check").checked = ficha.investigacaoCheck || false;
        document.getElementById("adestrar-animais-check").checked = ficha.adestrarAnimaisCheck || false;
        document.getElementById("medicina-check").checked = ficha.medicinaCheck || false;
        document.getElementById("natureza-check").checked = ficha.naturezaCheck || false;
        document.getElementById("percepcao-check").checked = ficha.percepcaoCheck || false;
        document.getElementById("persuasao-check").checked = ficha.persuasaoCheck || false;
        document.getElementById("prestidigitacao-check").checked = ficha.prestidigitacaoCheck || false;
        document.getElementById("religiao-check").checked = ficha.religiaoCheck || false;
        document.getElementById("sobrevivencia-check").checked = ficha.sobrevivenciaCheck || false;

        alert("Ficha carregada com sucesso!");
    } else {
        alert("Nenhuma ficha salva encontrada.");
    }
}


document.getElementById("salvarFicha").addEventListener("click", salvarFicha);
document.getElementById("carregar").addEventListener("click", carregarFicha);