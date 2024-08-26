        // Essa é uma função usada para anexar um "listener" (ouvinte) a um elemento do DOM

// Exemplo 01
// Escuta por cliques em um botão
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    console.log("Button was clicked!");
});


// Exemplo 02
//  Para detectar quando o valor de um campo de texto é alterado:
const textField = document.getElementById("myTextField")

textField.addEventListener('input', (event) => {
    console.log("Valor atual:", event.target.value)
});

// Exemplo 03
// Para mostrar como capturar e exibir a posição do mouse quando ele se move sobre um elemento específico:
const colorBox = document.getElementById("colorBox");

colorBox.addEventListener('mousemove', (event) => {
    // Calcula novas cores baseadas na posição do mouse dentro da caixa
    const red = Math.round((event.offsetX / colorBox.clientWidth) * 255);
    const green = Math.round((event.offsetY / colorBox.clientHeight) * 255);
    const blue = 150; // Um valor fixo para a cor azul

    // Aplica a nova cor de fundo
    colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})