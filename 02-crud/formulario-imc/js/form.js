

var addpaciente = document.querySelector("#adicionar-paciente")

addpaciente.addEventListener("click", function(event){
    event.preventDefault()

    var form = document.querySelector("#form-adiciona")
    /*
    var addnome = form.nome.value
    var addpeso = form.peso.value
    var addaltura = form.altura.value
    var addgordura = form.gordura.value
    */
    var paciente = GetFormPacient(form)
    console.log(paciente.peso)
    
    
    var pacienteTr = montaTr(paciente)
    /*
    var pacienteTr = document.createElement("tr")
    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")
    

    var pacienteTr = document.createElement("tr")
    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")
    
    nomeTd.textContent =  paciente.nome
    pesoTd.textContent =  paciente.peso
    alturaTd.textContent = paciente.altura
    gorduraTd.textContent = paciente.gordura
    imcTd.textContent =  calculaImc(paciente.peso,paciente.altura).toFixed(2)


    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)
    */

    
    
    document.getElementById("tabela-pacientes").appendChild(pacienteTr)
    
    form.reset()
    
})


function GetFormPacient(form){
    var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }

    return paciente
}

function montaTr(paciente){
    
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    var nomeTd = document.createElement("td")
    nomeTd.classList.add("info-nome")

    var pesoTd = document.createElement("td")
    pesoTd.classList.add("info-peso")

    var alturaTd = document.createElement("td")
    alturaTd.classList.add("info-altura")

    var gorduraTd = document.createElement("td")
    gorduraTd.classList.add("info-gordura")

    var imcTd = document.createElement("td")
    imcTd.classList.add("info-imc")

    nomeTd.textContent =  paciente.nome
    pesoTd.textContent =  paciente.peso
    alturaTd.textContent = paciente.altura
    gorduraTd.textContent = paciente.gordura
    imcTd.textContent =  calculaImc(paciente.peso,paciente.altura).toFixed(2)

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)
    
    return pacienteTr
}
