// Obtem o elemento do visor da calculadora
const display = document.getElementById('display');

// Função para adicionar valores ao visor
function appendValue(value) {
    display.value += value; // Adiciona o valor clicado ao final do visor
}

// Função para limpar o visor
function clearDisplay() {
    display.value = ''; // Remove todo o conteúdo do visor
}

// Função para calcular o resultado da expressão
function calculateResult() {
    try {
        const expression = display.value; // Obtém a expressão do visor

        // Valida se a expressão contém apenas caracteres permitidos
        if (/^[0-9+\-*/(). ]+$/.test(expression)) {
            // Avalia a expressão de forma segura usando Function
            display.value = Function(`'use strict'; return (${expression})`)();
        } else {
            // Alerta para expressões inválidas
            alert('Expressão inválida!');
            clearDisplay();
        }
    } catch (error) {
        // Alerta em caso de erro de avaliação
        alert('Erro na expressão!');
        clearDisplay();
    }
}