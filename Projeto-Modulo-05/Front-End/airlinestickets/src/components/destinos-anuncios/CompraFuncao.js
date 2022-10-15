export function Check() {
    let volta = document.getElementById("voltaCheck");

    if (volta.checked) {
        document.getElementById("volta").style.display = "flex";
    } else {
        document.getElementById("volta").style.display = "none";

    }
}


export function VerificandoValor() {
    var dataVolta = document.getElementById("TdVolta");

    for (let i = 0; i < dataVolta.lenght; i++) {

        if (dataVolta === "01/01/0001 00:00:00") {
            document.getElementById("TdVolta").innerHTML = "Viagem so de ida";

        } else {
            document.getElementById("TdVolta").innerHTML = dataVolta.innerHTML;
        }
    }
}


export function Desconto() {
    let valor = document.getElementById("Valor").value;

    let cupom = document.getElementById("Cupom").value;
    let descontoAplicado = false;
    valor = valor.replace(/,/g, "").replace(/\./g, "");

    let valorNovo = parseInt(valor);

    if ((cupom.toUpperCase() === "NATAL25")) {
        valorNovo = valorNovo - (valorNovo * 0.25);
        descontoAplicado = true;

    }  else if ((cupom.toUpperCase() === "NOVO30")) {
        valorNovo = valorNovo - (valorNovo * 0.30);
        descontoAplicado = true;

    } else if ((cupom.toUpperCase() === "FERIAS15")) {
        valorNovo = valorNovo - (valorNovo * 0.15);
        descontoAplicado = true;

    } else if ((cupom.toUpperCase() === "CARNAVAL20")) {
        valorNovo = valorNovo - (valorNovo * 0.20);
        descontoAplicado = true;

    } else {
        document.getElementById("AspCp").innerHTML = "Cupom Inválido - Verifique Seu Cupom";
    }

    if (descontoAplicado === true) {

        var resultado = " " + valorNovo;

        if (resultado.length > 4) {
            resultado = resultado.substring(1, 2) + "." + resultado.substring(2, resultado.length);
            resultado += ",00"
        } else if (resultado.length <= 4) {

            resultado += ",00"
        }

        document.getElementById("Valor").value = resultado;
        document.getElementById("AspCp").innerHTML = "Cupom Aplicado - Aproveite bem sua Viagem";
    }
}