var jogadores = []; // Lista de jogadores
var corpoTabela = document.getElementById("tabelaJogadores");
var nomeJogadorInput = document.getElementById("nomeJogadorInput");
var urlImagemInput = document.getElementById("urlImagemInput");

// URLs de imagens pré-definidas
var imagensAutomaticas = [
  "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2CWYSySnPAhsOHdq2OLSjv/f9e54debcfa0c8fe76012d9097b98e6e/Y2S2_BADGE_Lesion_L.png",

  "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/44qXJmZmAwaD4w44JnPuOx/c54c8b9d3a6813ab8ce3e3f1dd4ef408/Y1S2_BADGE_Valkyrie_L.png",

  "https://r6operators.marcopixel.eu/icons/png/ela.png"
];

function getRandomImage() {
  return imagensAutomaticas.shift() || "https://via.placeholder.com/50";
}

function exibirNaTela() {
  corpoTabela.innerHTML = "";

  jogadores.forEach(function (jogador) {
    corpoTabela.innerHTML += `
        <tr>
          <td>
            <div>${jogador.nome}</div>
            <div><img src="${jogador.imagem}" alt="${jogador.nome}" width="50"></div>
          </td>
          <td>${jogador.matou}</td>
          <td>${jogador.morreu}</td>
          <td>${jogador.assistencia}</td>
          <td>${jogador.pontos}</td>
          <td><button onClick="adicionarMatou('${jogador.nome}')">Matou</button></td>
          <td><button onClick="adicionarMorreu('${jogador.nome}')">Morreu</button></td>
          <td><button onClick="adicionarAssistencia('${jogador.nome}')">Assistência</button></td>
        </tr>`;
  });
}

function adicionarNovoJogador() {
  var nomeNovoJogador = nomeJogadorInput.value.trim();

  if (nomeNovoJogador !== "") {
    var novoJogador = {
      nome: nomeNovoJogador,
      matou: 0,
      morreu: 0,
      assistencia: 0,
      pontos: 0,
      imagem: getRandomImage()
    };

    jogadores.push(novoJogador);
    nomeJogadorInput.value = "";

    if (jogadores.length === 1) {
      alert(
        "Você adicionou o primeiro jogador. Adicione mais dois jogadores para iniciar a tabela."
      );
    }

    if (jogadores.length >= 3) {
      exibirNaTela();
    }
  }
}

function adicionarMatou(nomeJogador) {
  var jogador = jogadores.find((j) => j.nome === nomeJogador);
  if (jogador) {
    jogador.matou++;
    jogador.pontos += 100;
    exibirNaTela();
  }
}

function adicionarMorreu(nomeJogador) {
  var jogador = jogadores.find((j) => j.nome === nomeJogador);
  if (jogador) {
    jogador.morreu++;
    // Lógica adicional se necessário
    exibirNaTela();
  }
}

function adicionarAssistencia(nomeJogador) {
  var jogador = jogadores.find((j) => j.nome === nomeJogador);
  if (jogador) {
    jogador.assistencia++;
    jogador.pontos += 50;
    exibirNaTela();
  }
}
