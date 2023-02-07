var paciente = document.querySelectorAll(".paciente")

var tabela = document.querySelector("table")

console.log(tabela)

tabela.addEventListener("dblclick",function(event){
    
    /*
    var alvoEvento = event.target //
    var paiDoAlvo = alvoEvento.parentNode // seleciona o pai do elemento
    paiDoAlvo.remove()
    */
    event.target.parentNode.classList.add("fadeOut")

    setTimeout(function(){event.target.parentNode.remove()},700)
    

})




/*
paciente.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        this.remove() //this faz uma referencia a quem chama a funcao

    })
})
*/