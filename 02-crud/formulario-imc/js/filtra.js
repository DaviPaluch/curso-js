var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
    console.log(campoFiltro.value)
    var pacientes = document.querySelectorAll(".paciente")
    console.log(pacientes)

    if(this.value.length > 0){
        
        for(var i = 0; i < pacientes.length ; i++){
            var paciente = pacientes[i]
            var tdNome = paciente.querySelector(".info-nome")
            var nome = tdNome.textContent
            console.log(nome)
            var expressao = new RegExp(this.value, "i") //expressão regular !!
            if( !expressao.test(nome)/*a funcao ".test" faz checagem se existe um valor. Retorna um boolean*/){
                paciente.classList.add("invisivel")
            }else{ paciente.classList.remove("invisivel")}
    
    
        }
    }else{
        for(i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i]
            paciente.classList.remove("invisivel")
        }
    }

    
    
})