
alert(
  "Bem-vindo ao sistema de CRUD de veículos: \n No momento, o sistema tem " + cadastrarVeiculo.length + " carros cadastrados "
);

var comando;
var count = 0;

const carros = [];

function cadastrarVeiculo() {
  const carro = {};
  carro.id = count;
  carro.modelo = prompt("Digite modelo:");
  carro.marca = prompt("Digite marca:");
  carro.ano = prompt("Ano de fabrica:");
  carro.cor = prompt("Digite cor:");
  carro.preco = prompt("Digite preço do carro:");
  carros.push(carro);

  count++;
}

function listarVeiculo() {
  carros.forEach((carro) =>
    console.log (`ID: ${carro.id} | Modelo: ${carro.modelo}| Marca: ${carro.marca} | Ano: ${carro.ano} | Cor: ${carro.cor} |
  Preço: ${carro.preco}`)
  );
}

function filtrarVeiculo() {
  let input = prompt("Digite a marca do carro:");

  carros.filter(function (carro) {
    if (carro.marca === input) {
      return console.log(carro);
    }
  });
}

function atualizarVeiculo() {
  let identificador = prompt("Digite o id do veiculo:");

  const veiculo = carros.find(function (carro) {
    return carro.id.toString() === identificador;
  });

  if (!veiculo) {
    alert(
      "Veículo, não encontrado. O usuário deve voltar para o menu inicial depois"
    );
  } else {
    let cor = prompt("Digite a nova cor:");
    let preco = prompt("Digite o novo preço:");

    veiculo.cor = cor;
    veiculo.preco = preco;

    
    console.log("informações atualizadas do veiculo");
    console.log(`ID: ${veiculo.id} │ MODELO: ${veiculo.modelo} │ MARCA:${veiculo.marca}  │ ANO:${veiculo.ano} │ COR:${veiculo.cor} │ PREÇO:${veiculo.preco}`)
  }
}


function removerveiculo() {
  let removercarro = Number(prompt("digite o id do veiculo que deseja remover"))

  const carro = carros.find(function (carro) {
    return carro.id === removercarro;
  });

  if (!carro) {
    alert(
      "Veículo, não encontrado. O usuário deve voltar para o menu inicial depois"
    );
  } else {
  let removido = carros.splice (removercarro, 1)
  return  removido;
 console.log(removido)
}}

function selecionarNumero() {
  comando = parseInt(
    prompt("Digite a opção a seguir:\n 1 - Cadastrar veículo. \n 2 - Listar todos os veículos. \n 3 - Filtrar veículos por marca.\n 4 - Atualizar veículo.\n 5 - Remover veículo.\n 6 - Sair do sistema.\n")
  );
  switch (comando) {
    case 1:
      cadastrarVeiculo();
      break;
    case 2:
      listarVeiculo();
      break;
    case 3:
      filtrarVeiculo();
      break;
    case 4:
      atualizarVeiculo();
      break;
    case 5:
      removerveiculo();
      break;
    case 6:
      console.log("Sair do sistema");
      break;
    default:
      console.log("Opção invalida");
      break;
  }
}

do {
  selecionarNumero();
} while (comando != 6);