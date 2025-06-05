alert("Boas vindas ao jogo do número secreto!");

//definição de variáveis
let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let palpite;
let tentativas = 1;

console.log("O número secreto é:", numeroSecreto);

//loop para fazer o jogo funcionar

while(palpite != numeroSecreto) {
    palpite = prompt (`Escolha um número entre 1 e ${numeroMaximo}`);
    if (palpite == numeroSecreto){
        break;
    } else {
        if (palpite > numeroSecreto) {
            alert(`O número secreto é menor que ${palpite}`);
        } else {
            alert(`O número secreto é maior que ${palpite}`);
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
//operador ternario



