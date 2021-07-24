var numero =String() 
var numero2=String() 
var qualOperacao= ''
function operacoes(){
    var element0 =  document.getElementById('n3')
    element0.innerHTML = numero
    numero=Number(numero)
    numero2=Number(numero2)
   
    switch(qualOperacao){
        case 'a':
           var resultado = numero + numero2
           var element =  document.getElementById('exibir-resultado')
           element.innerHTML = resultado
           break;
        case 'b':
            var resultado = numero2-numero
            var element =  document.getElementById('exibir-resultado')
            element.innerHTML = resultado
           break;
        case 'c':
            var resultado = numero*numero2
            var element =  document.getElementById('exibir-resultado')
            element.innerHTML = resultado
           break;
        case 'd':
            var resultado = numero2/numero
            var element =  document.getElementById('exibir-resultado')
            element.innerHTML = resultado
           break;
        default:
            var element =  document.getElementById('exibir-resultado')
            element.innerHTML = '00'
    
    }
    numero=''
    numero2=''
    qualOperacao=''
}
function criarNum(num){
    numero += num
    var element =  document.getElementById('exibir-resultado')
    element.innerHTML = numero
}

function op(a,b){

    qualOperacao=a;
    numero2=numero;
    numero= ""
    var element =  document.getElementById('n1')
    element.innerHTML = numero2
    var element2 =  document.getElementById('n2')
    element2.innerHTML = b
}
function deletar(){
    numero.toString

    if(numero.length >  0){
        var  x = Number( numero.length-1)
        numero=numero.substr('',x)
        var element = document.getElementById("exibir-resultado")
        element.innerHTML= numero
 
    }else{
        var element = document.getElementById("exibir-resultado")
        element.innerHTML= '0'

    }
  
  
 } 
function pontuacao(x){
    numero = numero+x
    var element = document.getElementById("exibir-resultado")
    element.innerHTML= numero
}