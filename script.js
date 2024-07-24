function soma(){
    let n1 = Number(document.getElementById("um").value)
    let n2 = Number(document.getElementById("dois").value)
    let mais = n1 + n2; 
    let palavra = document.getElementById("cabo")
    palavra.innerHTML = palavra.innerHTML = n1 + " + " + n2 + " = " + mais;
}
function sub(){
    let n1 = Number(document.getElementById("um").value)
    let n2 = Number(document.getElementById("dois").value)
    let menos = n1 - n2;  
    let palavra = document.getElementById("cabo")
    palavra.innerHTML = palavra.innerHTML = n1 + " - " + n2 + " = " + menos;
}
function mult(){
    let n1 = Number(document.getElementById("um").value)
    let n2 = Number(document.getElementById("dois").value)
    let vezez = n1 * n2; 
    let palavra = document.getElementById("cabo")
    palavra.innerHTML = n1 + " x " + n2 + " = " + vezez;
}
function div(){
    let n1 = Number(document.getElementById("um").value)
    let n2 = Number(document.getElementById("dois").value)
    let vid = n1 / n2;
    let palavra = document.getElementById("cabo")
    palavra.innerHTML = palavra.innerHTML = n1 + " : " + n2 + " = " + vid;
    if(n1 == 0 || n2 == 0){
    palavra.innerHTML = palavra.innerHTML = n1 + " : " + n2 + " =  Undefined";
    }
}
function quadro(){
    alert("Este é o quadro,as respostas aparecerão aqui")
}