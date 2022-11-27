const form = document.getElementById('form');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senha2 = document.getElementById('senha2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validarInputs();
});

// mostrar error

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const mostrarErro = inputControl.querySelector('.error');

    mostrarErro.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

// mostrar sucesso

const setSuccess = element => {
    const inputControl = element.parentElement;
    const mostrarErro = inputControl.querySelector('.error');

    mostrarErro.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// restricao email

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// validar / remover espaço vazio

const validarInputs = () => {
    const usuarioValor = usuario.value.trim();
    const emailValor = email.value.trim();
    const senhaValor = senha.value.trim();
    const senha2Valor = senha2.value.trim();

// validação usuario

    if(usuarioValor === '') {
        setError(usuario, 'preencha este campo *');
    } else {
        setSuccess(usuario);
    }

// validação email

    if(emailValor === '') {
        setError(email, 'preencha este campo *');
    } else if (!isValidEmail(emailValor)) {
        setError(email, 'insira um email válido *');
    } else {
        setSuccess(email);
    }

// validação senha 1

    if(senhaValor === '') {
        setError(senha, 'preencha este campo *');
    } else if (senhaValor.length < 8 ) {
        setError(senha, 'sua senha deve ter no mínimo 8 caracteres.')
    } else {
        setSuccess(senha);
    }

// validação senha 2

    if(senha2Valor === '') {
        setError(senha2, 'preencha este campo *');
    } else if (senha2Valor !== senhaValor) {
        setError(senha2, "senhas não condizem");
    } else {
        setSuccess(senha2);
    }
};
