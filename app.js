//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let amigosRestantes = [];

// Adicionar evento ao pressionar Enter
document.getElementById("amigo").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    listaAmigos.push(nome);
    amigosRestantes.push(nome); // Atualiza a lista de amigos restantes
    alert(`${nome} adicionado com sucesso!`); // Exibe o alert com a mensagem de sucesso
    input.value = ""; // Limpa o campo de entrada
    input.focus();
}

function sortearAmigo() {
    if (amigosRestantes.length === 0) {
        alert("Todos os nomes foram sorteados!");
        return;
    }

    const sorteadoIndex = Math.floor(Math.random() * amigosRestantes.length);
    const sorteado = amigosRestantes[sorteadoIndex];

    // Remove o nome sorteado da lista de amigos restantes
    amigosRestantes.splice(sorteadoIndex, 1);

    exibirResultado(sorteado);

    // Exibe mensagem somente após o último nome ser sorteado
    setTimeout(() => {
        if (amigosRestantes.length === 0) {
            alert("Todos os nomes foram sorteados!");
        }
    }, 100); // Pequeno atraso para garantir que o último nome seja exibido antes do alert
}

function exibirResultado(sorteado) {
    const ul = document.getElementById("resultado");
    ul.innerHTML = ""; // Limpa os resultados anteriores

    const li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado é: ${sorteado}`;
    ul.appendChild(li);
}
