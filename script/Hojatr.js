let inicio = document.getElementById("inicio");
let final = document.getElementById("final");
let incognito = document.createDocumentFragment();

var moneda = ['Elige tu Moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euro', 'Libra Esterlina'];

Descripcion()

function Descripcion(){
    moneda.forEach(element => {
        let option = document.createElement("option");
        option.textContent = element;
        incognito.appendChild(option);

    });

    inicio.appendChild(incognito);
}

correr()

function correr(){
    moneda.forEach(element => {
        let option = document.createElement("option");
        option.textContent = element;
        incognito.appendChild(option);

    });

    final.appendChild(incognito);
}

function convertidor() {
    let valor = document.getElementById("valorMoneda").value
    let proceso = document.getElementById("inicio").value
    let despues = document.getElementById("final").value


    if(isNaN(valor)){
        alert("Debes ingresar un valor a convertir")
    }

    else{
        getValor(proceso,despues);
    }

    let resultado = (valor*getValor(proceso,despues))
    let Resumen = document.getElementById('resultado')
    Resumen.innerHTML = ""
    Resumen.innerHTML += valor + " "+ proceso + " = " + resultado + " " + despues 
    console.log(inicio)
    console.log(final)
    console.log(resultado)
}

function getValor(entrada, salida){
    if(entrada == salida){
        return alert("0")
    }
    if(entrada == "Dolar"){
        if(salida == "Euro"){
            return 0.88
        }
        if(salida == "Peso mexicano"){
            return 20
        }
        if(salida == "Libra esterlina"){
            return 0.76
        }
        if(salida == "Peso colombiano"){
            return 4000
        }
    }
    if(entrada == "Euro"){
        if(salida == "Dolar"){
            return 1.13
        }
        if(salida == "Peso mexicano"){
            return 23.76
        }
        if(salida == "Libra esterlina"){
            return 0.86
        }
        if(salida == "Peso colombiano"){
            return 4500
        }
    }

    if(entrada == "Libra esterlina"){
        if(salida == "Dolar"){
            return 1.32
        }
        if(salida == "Euro"){
            return 1.17
        }
        if(salida == "Peso mexicano"){
            return 27.67
        }
        if(salida == "Peso colombiano"){
            return 5158
        }
    }

    if(entrada == "Peso mexicano"){
        if(salida == "Dolar"){
            return 0.048
        }
        if(salida == "Euro"){
            return 0.042
        }
        if(salida == "Libra esterlina"){
            return 0.036
        }
        if(salida == "Peso colombiano"){
            return 186
        }
    }
    if(entrada == "Peso colombiano"){
        if(salida == "Dolar"){
            return 0.00026
        }
        if(salida == "Euro"){
            return 0.00023
        }
        if(salida == "Libra esterlina"){
            return 0.00019
        }
        if(salida == "Peso mexicano"){
            return 0.0054
        }
    }
}