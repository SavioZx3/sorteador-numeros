let botao = document.getElementById('btn-reiniciar');

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let menorNumero = parseInt(document.getElementById('de').value);
    let maiorNumero = parseInt(document.getElementById('ate').value);
   
    let numerosArmazenados= [];
    let geraNumero;
    
    for (let i = 0; i < quantidade; i++) {
      do {geraNumero = gerarNumeroAleatorio(menorNumero , maiorNumero);
      } while (numerosArmazenados.includes(geraNumero)); 
        numerosArmazenados.push(geraNumero);
    }
    
    let textoResultado = document.getElementById('resultado');
    textoResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosArmazenados}</label>`;

    alterarStatusBotao();
}


function reiniciar() {
  document.getElementById('quantidade').value = ' ';
  document.getElementById('de').value = ' ';
  document.getElementById('ate').value = ' ';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
  
  if (botao.classList.contains('container__botao')){
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }
}




function gerarNumeroAleatorio(min , max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  if (botao.classList.contains('container__botao-desabilitado')) {
          botao.classList.remove('container__botao-desabilitado');
          botao.classList.add('container__botao');
  } 
}


  

