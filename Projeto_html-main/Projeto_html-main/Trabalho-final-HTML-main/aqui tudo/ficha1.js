
function calcularNivel() {
    let pontosExperiencia = parseInt(document.getElementById('pontos-experiencia').value);
    let nivel = 1;
    let bonusProeficiencia = 2; 
    
    if (pontosExperiencia >= 355000) {
        nivel = 20;
        bonusProeficiencia = 6;
    } else if (pontosExperiencia >= 305000) {
        nivel = 19;
        bonusProeficiencia = 6;
    } else if (pontosExperiencia >= 265000) {
        nivel = 18;
        bonusProeficiencia = 6;
    } else if (pontosExperiencia >= 225000) {
        nivel = 17;
        bonusProeficiencia = 6;
    } else if (pontosExperiencia >= 195000) {
        nivel = 16;
        bonusProeficiencia = 5;
    } else if (pontosExperiencia >= 165000) {
        nivel = 15;
        bonusProeficiencia = 5;
    } else if (pontosExperiencia >= 140000) {
        nivel = 14;
        bonusProeficiencia = 5;
    } else if (pontosExperiencia >= 120000) {
        nivel = 13;
        bonusProeficiencia = 5;
    } else if (pontosExperiencia >= 100000) {
        nivel = 12;
        bonusProeficiencia = 4;
    } else if (pontosExperiencia >= 85000) {
        nivel = 11;
        bonusProeficiencia = 4;
    } else if (pontosExperiencia >= 64000) {
        nivel = 10;
        bonusProeficiencia = 4;
    } else if (pontosExperiencia >= 48000) {
        nivel = 9;
        bonusProeficiencia = 3;
    } else if (pontosExperiencia >= 34000) {
        nivel = 8;
        bonusProeficiencia = 3;
    } else if (pontosExperiencia >= 23000) {
        nivel = 7;
        bonusProeficiencia = 3;
    } else if (pontosExperiencia >= 14000) {
        nivel = 6;
        bonusProeficiencia = 3;
    } else if (pontosExperiencia >= 6500) {
        nivel = 5;
        bonusProeficiencia = 2;
    } else if (pontosExperiencia >= 2700) {
        nivel = 4;
        bonusProeficiencia = 2;
    } else if (pontosExperiencia >= 900) {
        nivel = 3;
        bonusProeficiencia = 2;
    } else if (pontosExperiencia >= 300) {
        nivel = 2;
        bonusProeficiencia = 2;
    }

    
    document.getElementById('nivel').value = nivel;
    document.getElementById('bonus-proeficiencia').value = "+" + bonusProeficiencia;

    
    atualizarTestesDeResistencia(bonusProeficiencia);
    atualizarPericias(bonusProeficiencia);
}

function calcularModificador(atributoValor) {
    let modificador = 0;

    if (atributoValor === 1){
        modificador = -5;
    } else if (atributoValor >= 2 && atributoValor <= 3) {
        modificador = -4;
    } else if (atributoValor >= 4 && atributoValor <= 5) {
        modificador = -3;
    } else if (atributoValor >= 6 && atributoValor <= 7) {
        modificador = -2;
    } else if (atributoValor >= 8 && atributoValor <= 9) {
        modificador = -1;
    } else if (atributoValor >= 10 && atributoValor <= 11) {
        modificador = 0;
    } else if (atributoValor >= 12 && atributoValor <= 13) {
        modificador = 1;
    } else if (atributoValor >= 14 && atributoValor <= 15) {
        modificador = 2;
    } else if (atributoValor >= 16 && atributoValor <= 17) {
        modificador = 3;
    } else if (atributoValor >= 18 && atributoValor <= 19) {
        modificador = 4;
    } else if (atributoValor >= 20 && atributoValor <= 21) {
        modificador = 5;
    } else if (atributoValor >= 22 && atributoValor <= 23) {
        modificador = 6;
    } else if (atributoValor >= 24 && atributoValor <= 25) {
        modificador = 7;
    } else if (atributoValor >= 26 && atributoValor <= 27) {
        modificador = 8;
    } else if (atributoValor >= 28 && atributoValor <= 29) {
        modificador = 9;
    } else if (atributoValor === 30) {
        modificador = 10;
    } else {
        modificador = "";
    }

    return modificador;
}

const forca = parseInt(document.getElementById('forca').value) || 0;
const destreza = parseInt(document.getElementById('destreza').value) || 0;
const constituicao = parseInt(document.getElementById('constituicao').value) || 0;
const inteligencia = parseInt(document.getElementById('inteligencia').value) || 0;
const sabedoria = parseInt(document.getElementById('sabedoria').value) || 0;
const carisma = parseInt(document.getElementById('carisma').value) || 0;


function atualizarModificadores() {
    const forca = parseInt(document.getElementById('forca').value) || 0;
    const destreza = parseInt(document.getElementById('destreza').value) || 0;
    const constituicao = parseInt(document.getElementById('constituicao').value) || 0;
    const inteligencia = parseInt(document.getElementById('inteligencia').value) || 0;
    const sabedoria = parseInt(document.getElementById('sabedoria').value) || 0;
    const carisma = parseInt(document.getElementById('carisma').value) || 0;

    
    document.getElementById('mod-forca').textContent = calcularModificador(forca);
    document.getElementById('mod-destreza').textContent = calcularModificador(destreza);
    document.getElementById('mod-constituicao').textContent = calcularModificador(constituicao);
    document.getElementById('mod-inteligencia').textContent = calcularModificador(inteligencia);
    document.getElementById('mod-sabedoria').textContent = calcularModificador(sabedoria);
    document.getElementById('mod-carisma').textContent = calcularModificador(carisma);
}


function atualizarPericias() {
    
    const forca = parseInt(document.getElementById('forca').value) || 0;
    const destreza = parseInt(document.getElementById('destreza').value) || 0;
    const inteligencia = parseInt(document.getElementById('inteligencia').value) || 0;
    const sabedoria = parseInt(document.getElementById('sabedoria').value) || 0;
    const carisma = parseInt(document.getElementById('carisma').value) || 0;

    // Bônus de proficiência
    const bonusProeficiencia = parseInt(document.getElementById('bonus-proeficiencia').value) || 0;

    
    function calcularPericia(atributo, checkboxId, modId) {
        const modificador = calcularModificador(atributo); 
        const checkbox = document.getElementById(checkboxId); 
        
        
        const resultado = checkbox.checked ? modificador + bonusProeficiencia : modificador;
        
        
        document.getElementById(modId).textContent = `(${resultado >= 0 ? '+' : ''}${resultado})`;
    }
    
    
    calcularPericia(forca, 'atletismo-check', 'mod-atletismo');
    calcularPericia(destreza, 'acrobacia-check', 'mod-acrobacia');
    calcularPericia(destreza, 'furtividade-check', 'mod-furtividade');
    calcularPericia(destreza, 'prestidigitacao-check', 'mod-prestidigitacao');
    calcularPericia(inteligencia, 'arcanismo-check', 'mod-arcanismo');
    calcularPericia(inteligencia, 'historia-check', 'mod-historia');
    calcularPericia(inteligencia, 'investigacao-check', 'mod-investigacao');
    calcularPericia(inteligencia, 'natureza-check', 'mod-natureza');
    calcularPericia(inteligencia, 'religiao-check', 'mod-religiao');
    calcularPericia(sabedoria, 'adestrar-animais-check', 'mod-adestrar-animais');
    calcularPericia(sabedoria, 'intuicao-check', 'mod-intuicao');
    calcularPericia(sabedoria, 'medicina-check', 'mod-medicina');
    calcularPericia(sabedoria, 'percepcao-check', 'mod-percepcao');
    calcularPericia(sabedoria, 'sobrevivencia-check', 'mod-sobrevivencia');
    calcularPericia(carisma, 'atuacao-check', 'mod-atuacao');
    calcularPericia(carisma, 'enganacao-check', 'mod-enganacao');
    calcularPericia(carisma, 'intimidacao-check', 'mod-intimidacao');
    calcularPericia(carisma, 'persuasao-check', 'mod-persuasao');
}


document.getElementById('forca').addEventListener('input', atualizarPericias);
document.getElementById('destreza').addEventListener('input', atualizarPericias);
document.getElementById('constituicao').addEventListener('input', atualizarPericias);
document.getElementById('inteligencia').addEventListener('input', atualizarPericias);
document.getElementById('sabedoria').addEventListener('input', atualizarPericias);
document.getElementById('carisma').addEventListener('input', atualizarPericias);


atualizarPericias();


function atualizarTestesDeResistencia() {
    
    const forca = parseInt(document.getElementById('forca').value) || 0;
    const destreza = parseInt(document.getElementById('destreza').value) || 0;
    const constituicao = parseInt(document.getElementById('constituicao').value) || 0;
    const inteligencia = parseInt(document.getElementById('inteligencia').value) || 0;
    const sabedoria = parseInt(document.getElementById('sabedoria').value) || 0;
    const carisma = parseInt(document.getElementById('carisma').value) || 0;

   
    const bonusProeficiencia = parseInt(document.getElementById('bonus-proeficiencia').value) || 0;

    
    function calcularResistencia(atributo, checkboxId, modId) {
        const modificador = calcularModificador(atributo); 
        const checkbox = document.getElementById(checkboxId); 
        
        const resultado = checkbox.checked ? modificador + bonusProeficiencia : modificador;

        
        document.getElementById(modId).textContent = `(${resultado >= 0 ? '+' : ''}${resultado})`;
    }

    
    calcularResistencia(forca, 'forca-check', 'mod-forca-resistencia');
    calcularResistencia(destreza, 'destreza-check', 'mod-destreza-resistencia');
    calcularResistencia(constituicao, 'constituicao-check', 'mod-constituicao-resistencia');
    calcularResistencia(inteligencia, 'inteligencia-check', 'mod-inteligencia-resistencia');
    calcularResistencia(sabedoria, 'sabedoria-check', 'mod-sabedoria-resistencia');
    calcularResistencia(carisma, 'carisma-check', 'mod-carisma-resistencia');
}


document.getElementById('pontos-experiencia').addEventListener('input', calcularNivel);


document.getElementById('forca').addEventListener('input', atualizarModificadores);
document.getElementById('destreza').addEventListener('input', atualizarModificadores);
document.getElementById('constituicao').addEventListener('input', atualizarModificadores);
document.getElementById('inteligencia').addEventListener('input', atualizarModificadores);
document.getElementById('sabedoria').addEventListener('input', atualizarModificadores);
document.getElementById('carisma').addEventListener('input', atualizarModificadores);


calcularNivel();


