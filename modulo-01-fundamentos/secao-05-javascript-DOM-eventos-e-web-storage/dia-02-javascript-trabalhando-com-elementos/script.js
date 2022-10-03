document.getElementById("elementoOndeVoceEsta").parentNode.style.backgroundColor="red";
document.getElementById("primeiroFilhoDoFilho").innerText="Olá, bom dia!";
document.getElementById("pai").firstElementChild;
document.getElementById("elementoOndeVoceEsta").parentNode.firstElementChild;
document.getElementById("elementoOndeVoceEsta").parentNode.firstChild;
document.getElementById("elementoOndeVoceEsta").parentNode.firstElementChild.nextElementSibling.nextElementSibling;
document.getElementById("pai").firstElementChild.nextElementSibling.nextElementSibling;

const pai = document.getElementById('pai');
const irmaoElementoOndeVoceEsta = document.createElement("section");
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
const filhoElementoOndeVoceEsta = document.createElement("section");
filhoElementoOndeVoceEsta.id = "filhoElementoOndeVoceEsta";
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
const filhoPrimeiroFilhoDoFilho = document.createElement("section");
filhoPrimeiroFilhoDoFilho.id = "filhoPrimeiroFIlhoDoFilho";
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

const terceiroFilho = filhoPrimeiroFilhoDoFilho
.parentElement
.parentElement
.nextElementSibling;
console.log(terceiroFilho);





