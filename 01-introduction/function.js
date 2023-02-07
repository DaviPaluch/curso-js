
function testes(){ // i make the function

    console.log("teste01"); 
}


testes(); //i call the function


//FORMA MODERNA UTILIZANDO ARROW FUNCTIONS

const testes2 = () => {
    console.log("teste02")
}
testes2(); //i call the function


//QUANDO CRIA UMA FUNCAO ELA E' CHAMADA POSTERIORMENTE

//util quando trabalhado de forma sincrona

(

    function(){
        alert("hello world")
    }

)(); //util quando trabalhado de forma sincrona





//CALLBACKS == QUANDO NA FUNCAO EU PASSO PARAMETROS


function testes3(nome,func){ // it make the function

    console.log(nome);
    func(); //ela vai ser executada aqui
}

testes3('zezinho',function(){ // o segundo parametro que esta' sendo chamado e' a funcao
    alert("Hey!"); // eu posso colocar qualquer codigo aqui dentro
});


function testes4(nome,func){ // it make the function // As informacoes vem da funcao principal de onde esta vindo o callback de origem 

    console.log(nome);
    par = {nome :"DAVI"};// estou criando o parametro que vai ser usado depois
    func(par); //ela vai ser executada aqui
}

testes4('uguinho',function(par){ //ter parametros dentro da funcao que eu estou chamando 
    alert(par.nome);
});


