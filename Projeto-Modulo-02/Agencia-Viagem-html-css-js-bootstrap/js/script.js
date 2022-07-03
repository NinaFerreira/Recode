function Contato() {
    let msg = document.getElementById("msg");


    for (let i = 0; i < msg.lenght; i++) {
        msg.innerText = " ";
    }


    alert("Entraremos em contato em breve.")
}

function Check() {
    let volta = document.getElementById("voltaCheck");


    if (volta.checked) {
        document.getElementById("volta").style.display = "block";
    } else {
        document.getElementById("volta").style.display = "none";
    }
}


function Descricao(id) {
    let valor = document.getElementById(id).children;
    console.log(valor.length)

    document.getElementById("descricao").innerHTML = " ";

    document.getElementById("descricao").innerHTML = valor[0].innerHTML + " - " + valor[1].innerHTML;


}