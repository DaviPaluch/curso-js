class paluchclass{ // aqui dentro eu posso declarar metodos atributos emuito mais



        constructor(){ // geralmente as classe tem um me'todo chamado construtor, e' invocado assim quando instancia a classe 

            this.nome = "davi";
        }
        // o "this" vais estar acessivel em toda classe mesmo estando fora do escopo, porque estamos trabalhando com classe
        printNome(){
            console.log(this.nome)
        }


}

var paluch = new paluchclass

paluch.nome = "jkljkljlk"; //estou mudando o valor da variavel de fora da class

paluch.printNome(); //estou invocando a funcao











