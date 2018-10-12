//Parte 1

//1-2
var container = document.getElementById('c1');
console.log(container);

//3
container.innerText = 'Hola mundo!';  

//4
container.style.backgroundColor = '#000000';

//5
container.style.color= '#1cb723';

//6
container.style.width = '200px';
container.style.height = '200px';

//7
container.innerHTML = '<input type= "text" placeholder= "escriba su texto">';

//Parte 2

//1
var containers = document.querySelectorAll('.c2');
console.log(containers);
    
//2
containers.forEach((ele)=>{
    ele.style.backgroundColor = '#009999';
    ele.innerHTML = '<input type="text" placeholder= "Escriba su texto">'
});


//Eventos

//1
var boton = document.getElementById('btn-click');

//2
boton.onclick = (e)=>{
    alert('hola mundo');
}

var btnCopy = document.getElementById('btnCopy');

btnCopy.onclick = (e)=>{
    let msj = document.getElementById('textMsj').value;
    document.getElementById('showMsj').innerText = msj;
}
