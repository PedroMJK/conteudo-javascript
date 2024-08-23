// Pegar pelo Id, o elemento "decreaseBtn" e atribuir o método onclick,
// e isso receberá uma função anônima.
// Essa função receberá o count que recebe um número a menos  quanddo for clicado
// Pegar pelo Id, o elemento "countLabel" e atribuir o método innerHTML. 
//  innerHTML irá atualizar o valor da variável count.

let count = 0;

document.getElementById("decreaseBtn").onclick = function() {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
    console.log("Clicked") // Cheque no concole do DevTools
}
document.getElementById("resetBtn").onclick = function() {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = function() {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}
