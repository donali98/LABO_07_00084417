//1-2
var container = document.getElementById('c1');
console.log(container);

/**Que contiene la variable container? */

/**
 * Contiene el elemento html a la que se le ha asignado el id 'c1'
 */

//3
container.innerText = 'Hola mundo!';  

/**Que se visualiza en el navegador */
/**
 * El texto del contenedor cambio de tener nada a poner 'Hola mundo!'
 */

//4
container.style.backgroundColor = '#000000';

//5
container.style.color= '#1cb723';

//6
container.style.width = '200px';
container.style.height = '200px';

//7
container.innerHTML = '<input type= "text" placeholder= "escriba su texto">';
/** Que es lo que se muestra en pantalla 
 * Un elemento input dentro del elemento c1
*/
/**
 * Cual es la diferencia entre las propiedades innerHtml e innerText?
 * Que innerText coloca un texto dentro del elemento e innerHtml puede insertar un
 * elemento dentro del contenedor indicado
 */