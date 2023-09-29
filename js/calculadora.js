//https://sweetalert2.github.io

// variavel que ira controlar o tema da pagina (claro ou escuro)
let temaescuro = false;

//Função para alterar entre o tema claro e escuro
function alterartema() {
    let body = document.body;
    if(temaescuro){
body.classList.remove("tema-escuro");

    }else{
        body.classList.add('tema-escuro');
    }
    temaescuro = !temaescuro;
}

//Função para colocar o foco em um componente por meio do seu id 
function focarComponentePeloId(idComponente) {
    document.getElementById(idComponente).focus();
}

//Função para gerar uma mensagem de confirmação antes de limpar os campos
function confirmLimpeza() {
    Swal.fire({
        title: 'Tem certeza?',
        Text: 'Isso irá limpar todos os campos!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, Limpar!',
        cancelButtonText: 'Cancelar!'
    }).then((result) => {
        if (result.isConfirmed) {
            limparCampos();
            //setTimeout(function(){
            focarComponentePeloId("num1");
        }
    }, 300);
}

// Função para limpar todos os campos 
function limparCampos() {
    if (confirm)
        document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("nume1-error").textContent = "";
    document.getElementById("nume2-error").textContent = "";

}

//Função  para formatar números com casa decimais
function formatarNumero(numero) {
    return numero.toLocaleString('pt-BR', {
        MinimumFractionDigits: 0,
        MaximumFractionDigits: 8
    });
}

// Função para alterar a cor do resultado
function atualizarCorResultado(resultado) {
    let resultadoInput = document.getElementById("resultado");
    if (resultado < 0) {
        resultadoInput.style.color = "red";
    } else {
        resultadoInput.style.color = "yellow";
    }
}

// Função para verificar se os campos foram preenchidos
function validarCampos() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let isValid = true;

    if (num1 === "") {
        document.getElementById("num1-error").textContent =
            "Preenchimento obrigatório";
        isValid = false;
    } else {
        document.getElementById("num1-error").textContent = "";
    }

    if (num2 === "") {
        document.getElementById("num2-error").textContent =
            "Preenchimento obrigatório";
        isValid = false;
    } else {
        document.getElementById("num2-error").textContent = "";
    }

    return isValid;
}

// Função que limpa a mensagem de erro
function limparErro(campo) {
    document.getElementById(campo + "-error").textContent = "";
}


function somar() {
    if (validarCampos() === false) {
        return;
    }

    // if (!validarCampos()) return;

    let compNumero1 = document.querySelector('#num1');
    let compNumero2 = document.querySelector('#num2');

    let numero1 = Number(compNumero1.value);
    let numero2 = parseFloat(compNumero2.value);

    let resultado = numero1 + numero2;

    let compResultado = document.querySelector('#resultado');
    compResultado.value = formatarNumero(resultado);
    atualizarCorResultado(resultado);
}

function subtrair() {
    if (!validarCampos()) return;

    let compNumero1 = document.querySelector('#num1');
    let compNumero2 = document.querySelector('#num2');

    let numero1 = Number(compNumero1.value);
    let numero2 = parseFloat(compNumero2.value);

    let resultado = numero1 - numero2;

    let compResultado = document.querySelector('#resultado');
    compResultado.value = formatarNumero(resultado);
    atualizarCorResultado(resultado);
}

function multiplicar() {
    if (!validarCampos()) return;

    let compNumero1 = document.querySelector('#num1');
    let compNumero2 = document.querySelector('#num2');

    let numero1 = Number(compNumero1.value);
    let numero2 = parseFloat(compNumero2.value);

    let resultado = numero1 * numero2;

    let compResultado = document.querySelector('#resultado');
    compResultado.value = formatarNumero(resultado);
    atualizarCorResultado(resultado);
}

function dividir() {
    if (!validarCampos()) return;

    let compNumero1 = document.querySelector('#num1');
    let compNumero2 = document.querySelector('#num2');

    let numero1 = Number(compNumero1.value);
    let numero2 = parseFloat(compNumero2.value);

    if (numero2 === 0) {
        document.getElementById("num2-error").textContent =
            "Não é possível dividir por zero";
        return;
    }

    document.getElementById("num2-error").textContent = "";

    let resultado = numero1 / numero2;

    let compResultado = document.querySelector('#resultado');
    compResultado.value = formatarNumero(resultado);
    atualizarCorResultado(resultado);
}

