


//texto que irá ser inserido da H1 do html
const my="Olá,me chamo Orlando Paulo!";
//tempo da apresentação
const tempoo=90;
//variavel a qual indico o indice de inicio
let indice=0;
//ID da tag html
let elemento=document.getElementById('myP')

//função para ser apresentado
function texto(){
    //o charAt funcionada para apresentar o texto por partes
    elemento.textContent+=my.charAt(indice);
    indice++
    //uma condição informando que se o indice for menor chame a função atraves do setTimeout
    if(indice<my.length){
        setTimeout("texto()",tempoo);
    }
}
//chamndo a função após carregar a página 
window.onload=texto,foto1,foto2,foto3

