function testes(){
    return new Promise(function(resolve,reject){
        if(1 == 2){
            resolve('Davi Paluch');
        }else{
            reject('Falhou');
        }
    });
}
    //Uma promise recebe uma callback que no caso tem um resolve e um regect

testes().then(function(val){  
    alert(val);
}).catch(function(error){
    alert(error);
})
// estamos invocando a funcao... ela recebe um "".them" pelo fato de estarmos reotnando nossa promisse que pode tanto ser resolve quanto regect.


////////////////////////////////////////////////////////////////////////


//A Promise abaixo deve ser bem revisada pelo fato de que nossa promise sera' chamada depois do conselo.log, o codigo vai esperar dois segundo mas nao ira' esperar para continuar o programa  

function testes2(){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,2000,'daviP')
    })
}


testes2().then(function(val){
    console.log(val);
});


console.log('Chamando depois da funcao promise');



////////////////////////////////////////////////////////////////////////

//Para fazer com que primeiro se resolva a funcao em questao, e depois siga com o codigo, utilizaremos o conceito de "await";


function testes3(){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,2000,'Primeiro a funcao consumida')
    })
}


(
    async function(){
        await testes3().then(function(val){
            console.log(val);
        });

        console.log('Chamando depois da funcao promise');

    }
// o problema e' que eu nao posso usar o "await fora de um escopo que nao seja sincrono"

)();


























