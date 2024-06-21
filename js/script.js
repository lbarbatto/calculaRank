function calcularRank() {
    const nome = document.getElementById('nome').value.trim();
    const vitorias = document.getElementById('vitorias').value.trim();
    const derrotas = document.getElementById('derrotas').value.trim();

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';  // Limpar results

    // Valida inputs
    if (!nome) {
        mostrarErro("O campo Nome é obrigatório.");
        return;
    }
    if (!isNumeroValido(vitorias) || vitorias < 0) {
        mostrarErro("O número de vitórias é inválido.");
        return;
    }
    if (!isNumeroValido(derrotas) || derrotas < 0) {
        mostrarErro("O número de derrotas é inválido.");
        return;
    }

    const vitoriasInt = parseInt(vitorias);
    const derrotasInt = parseInt(derrotas);
    const saldoVitorias = vitoriasInt - derrotasInt;
    let nivel = '';

    if (saldoVitorias < 10) {
        nivel = 'Ferro';
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = 'Bronze';
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = 'Prata';
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = 'Ouro';
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = 'Diamante';
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = 'Lendário';
    } else if (saldoVitorias >= 101) {
        nivel = 'Imortal';
    }

    const resultado = `${nome} tem saldo de <strong>${saldoVitorias}</strong> está no nível <strong>${nivel}</strong>`;
    resultadoDiv.innerHTML = resultado;
}

function isNumeroValido(numero) {
    return !isNaN(numero) && numero !== '';
}

function mostrarErro(mensagem) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<div class="error">${mensagem}</div>`;
}