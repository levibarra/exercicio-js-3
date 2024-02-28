//window.confirm('sexo de ladinho?')
const nomeAventureiro = prompt('Qual seu nome, aventureiro(a)?')

if (confirm("Seja bem vindo(a) " + nomeAventureiro + '! Gostaria de pagar R$50,00 para passar a noite na nossa hospedagem?')) {
    alert("Ótimo! Nós temos as melhores camas de toda a região!");
  } else {
    alert("Que pena! Você parecia ser uma pessoa mais legal...");
  }
