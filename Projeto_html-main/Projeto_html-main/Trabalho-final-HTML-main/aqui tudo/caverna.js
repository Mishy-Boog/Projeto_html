
const historicoResultados = {
    4: [],
    6: [],
    8: [],
    10: [],
    12: [],
    20: [],
    100: []
  };
  
  function rolarDado(lados) {
    let resultado;
  
    
    if (lados === 100) {
      resultado = Math.floor(Math.random() * 10) * 10;
    } else {
      resultado = Math.floor(Math.random() * lados) + 1;
    }
  
    
    if (historicoResultados[lados].length >= 10) {
      historicoResultados[lados].shift(); 
    }
    historicoResultados[lados].push(resultado);
  
   
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
  
    
    mostrarHistorico(lados);
  }
  
  
  function mostrarHistorico(lados) {
    const historicoDiv = document.getElementById('historico');
    let historicoTexto = `<strong>Últimos resultados do D${lados}:</strong><br>`;
    
    
    for (let i = historicoResultados[lados].length - 1; i >= 0; i--) {
      historicoTexto += `${historicoResultados[lados][i]}<br>`;
    }
  
    
    historicoDiv.innerHTML = historicoTexto;
  }
  
