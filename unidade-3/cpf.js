document.getElementById('cpf-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cpf = document.getElementById('cpf').value;
    const feedback = document.getElementById('cpf-feedback');
    
    if (validarCPF(cpf)) {
        feedback.textContent = "CPF válido.";
        feedback.className = 'feedback success';
    } else {
        feedback.textContent = "CPF inválido.";
        feedback.className = 'feedback error';
    }
});

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    for (let i = 9; i < 11; i++) {
        let soma = 0, j = 0;

        for (j; j < i; j++) {
            soma += parseInt(cpf.charAt(j)) * ((i + 1) - j);
        }

        let digito = soma % 11;
        digito = digito < 2 ? 0 : 11 - digito;

        if (digito !== parseInt(cpf.charAt(j))) {
            return false;
        }
    }

    return true;
}
