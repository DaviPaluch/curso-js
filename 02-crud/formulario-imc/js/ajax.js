var buttonBuscarPaciente = document.querySelector("#buscar-paciente")

buttonBuscarPaciente.addEventListener("click", function(){
    event.preventDefault()
    var xhr = new XMLHttpRequest() //faz requisicoes http ou xml
    xhr.open("GET", "https://www.google.com/") //equivalente a fazer uma requisicao de API. Requisição
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            var resposta = xhr.responseText //response
            var pacientes = JSON.parse(resposta) //transforma o response em um obj JS
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText)
        }
        
    }) /* load é um evento que verifica se a resposta já foi carregada*/

    xhr.send() // Response. 
})