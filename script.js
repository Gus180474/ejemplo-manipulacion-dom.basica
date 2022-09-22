const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);//event listener que llama a la funcion
//con esta forma activamos el eventlistener dede un formulario
function sumarInputValues(event) {
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;//concatena en index
    pResult.innerText = "Resultado: " + sumaInputs;
}
