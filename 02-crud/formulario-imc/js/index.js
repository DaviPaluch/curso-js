
var pacientes = document.querySelectorAll(".paciente")



for(var i = 0; i < pacientes.length; i++ ){
    paciente = pacientes[i]
    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent
    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent
    var tdGordura = paciente.querySelector(".info-gordura")
    var tdImc = paciente.querySelector(".info-imc")

    var pesoValid = true
    var alturaValid = true

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inváido;")
        pesoValid=false
        tdImc.textContent = "Peso Inválido"
    }
    if(altura <= 0 && altura >= 3){
        console.log("Altura inválida")
        alturaValid = false
        tdAltura.textContent = "Altura inválida"
    }
    if(alturaValid && pesoValid){
        var imc = calculaImc(peso,altura)
        tdImc.textContent = imc
    }
    if(!alturaValid || !pesoValid){
        paciente.classList.add("paciente-invalid") //aqui estou adicionando uma classe com o determinado nome.
    }
}


function calculaImc(peso,altura){
    var imc = 0
    imc = peso / (altura*altura)

    return imc
}

