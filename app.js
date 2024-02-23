let botao = document.getElementById('btn-reiniciar');

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let menorNumero = parseInt(document.getElementById('de').value);
    let maiorNumero = parseInt(document.getElementById('ate').value);

    if (menorNumero >= maiorNumero) {
      alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
      habilitaBotãoReiniciar();
      return;
    }
   
    if(quantidade > maiorNumero - menorNumero + 1) {
      alert(`Não é possivel realizar o sorteio: Não existe ${quantidade} números no intervalo de ${menorNumero} até ${maiorNumero}. Vertifique!`)
    } else {
      let numerosArmazenados= [];
      let numeroGerado;
      for (let i = 0; i < quantidade; i++) {
       do {numeroGerado = gerarNumeroAleatorio(menorNumero , maiorNumero);
         } while (numerosArmazenados.includes(numeroGerado)); 
        numerosArmazenados.push(numeroGerado);
      }
      let numerosOrdenados = numerosArmazenados.slice().sort(function(a, b) {
        return a - b;
      });
      
      let palavrasNumerosSorteados = quantidade > 1 ? 'Números sorteados' : 'Número sorteado'
      let textoResultado = document.getElementById('resultado');
      textoResultado.innerHTML = `<label class="texto__paragrafo">${palavrasNumerosSorteados}: ${numerosOrdenados}</label>`;
    } 

    habilitaBotãoReiniciar();
}


function reiniciar() {
  document.getElementById('quantidade').value = ' ';
  document.getElementById('de').value = ' ';
  document.getElementById('ate').value = ' ';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
  
  desabilitaBotãoReiniciar();
}





function gerarNumeroAleatorio(min , max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function habilitaBotãoReiniciar() {
  if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  } 
}

function desabilitaBotãoReiniciar() {
  if (botao.classList.contains('container__botao')){
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }
}

  

