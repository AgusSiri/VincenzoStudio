

/*
let arrayNuevoCliente = [];

let nombre = prompt("Por favor ingrese su nombre");
let apellido = prompt("Por favor ingrese su apellido");
let nombreCompleto = nombre + " " + apellido;
let celular = parseInt(prompt("Bienvenido/a a Vincenzo Studio" + " " + nombreCompleto + " " + "Ingrese su celular solo con numeros por favor"));

arrayNuevoCliente.push(new Cliente(nombre, apellido, celular));
 alert("La persona" + " " + arrayNuevoCliente[0].nombre + " " + arrayNuevoCliente[0].apellido + " " + "cuyo celular es" + " " + arrayNuevoCliente[0].celular + " " + "es un nuevo cliente");*/


//Datos Cliente//

function Cliente (nombre, mail) {
  this.nombre = nombre;
  this.email = mail;
}

//Servicio a contratar//

function Service(sections, tienda, mantenimiento, webExpress) {
    this.sections = parseInt(sections);
    this.tienda = tienda;
    this.mantenimiento = mantenimiento;
    this.webExpress = webExpress;
}

/* let sections= parseInt(prompt("Ingrese la cantidad de páginas o secciones que tendrá el sitio"));
let tienda = prompt("Necesita una tienda online en su web?");
let mantenimiento = prompt("Desea contratar servicio de mantenimiento para su sitio?");
let webExpres = prompt("Necesita su sitio dentro de los prox 10 dias?"); */

/*let servicio = new Service(sections, tienda, mantenimiento, webExpres);*/


function precioTotal(param){ 

 
if (param.tienda == "si") {
  valorTienda=200;
} else {
  valorTienda=0;
}

if (param.mantenimiento == "si") {
  valorMantenimiento=100;
} else {
  valorMantenimiento=0;
}

if (param.webExpres == "si") {
  valorWebExpress=150;
} else {
  valorWebExpress=0;
}
let resultado = (param.sections+valorTienda+valorMantenimiento+valorWebExpress);
return resultado;

}

/*let resultado = precioTotal(servicio);
let presupuesto = ("Su presupuesto es" + " " + resultado + " " + "U$D");
alert(presupuesto);
console.log(presupuesto);*/

function submitForm() {
  let formNombre = document.getElementById("inputNombre").value ;
  console.log(formNombre);
  let formEmail = document.getElementById("inputEmail").value ;
  console.log(formEmail);
  let formSecciones = document.getElementById("selectSecciones").value ;
  console.log(formSecciones);
  let formTiendaOnline = document.getElementById("selectTiendaOnline").value ;
  console.log(formTiendaOnline);
  let formMantenimiento = document.getElementById("selectMantenimiento").value ;
  console.log(formMantenimiento);
  let formWebExpress = document.getElementById("selectWebExpress").value;
  console.log(formWebExpress);
  
  let servicio1 = new Service(formSecciones, formTiendaOnline, formMantenimiento, formWebExpress);

  let cliente1 = new Cliente(formNombre, formEmail);
  mostrarPresupuesto(servicio1, cliente1);
  guardarCliente(cliente1);
}



function mostrarPresupuesto(servicio, cliente) {
  let resultado = precioTotal(servicio);
  let formPresupuesto = document.getElementById("formPresupuesto"); 
  let totalPresupuesto = document.createElement("h3");
  let textPresupuesto = document.createTextNode ("Hola "+ cliente.nombre + ", su presupuesto es " + resultado + "U$D");
  totalPresupuesto.appendChild(textPresupuesto);
  formPresupuesto.appendChild(totalPresupuesto);
  let presupuesto = ("Su presupuesto es" + " " + resultado + " " + "U$D");
  console.log(presupuesto);
}

function guardarCliente(cliente2) {
  let jsonCliente = { nombre: cliente2.nombre, mail: cliente2.email }
  console.log(jsonCliente);
  console.log(jsonCliente['nombre'])
  let stringifyJson = JSON.stringify(jsonCliente);
  console.log(stringifyJson);
  localStorage.setItem('cliente', stringifyJson);
}

function cargarCliente() {
  let stringifyClient = localStorage.getItem('cliente');
  console.log(stringifyClient);
  let cliente = JSON.parse(stringifyClient);
  console.log(cliente['nombre']);
  document.getElementById("inputNombre").value = cliente['nombre'];
  document.getElementById("inputEmail").value = cliente ['mail'];
}

cargarCliente();

//Medios de pago//


/*let pago = ["Transferencia", "Mastercard", "Visa", "American Express", "Maestro"];

for (let i = 0; i <= 5; i++){
  switch (i) {
    case 0:
      alert("Con "+ pago[i].toUpperCase() + "Usted tiene un 10% de descuento sobre el valor total");
      break;
    case 1:
      alert("Con "+ pago[i].toUpperCase() + "Usted tiene hasta 3 cuotas sin interes");
      break;
    case 2:
      alert("Con "+ pago[i].toUpperCase() + "Usted tiene hasta 6 cuotas sin interes");
      break;
    case 3:
      alert("Con "+ pago[i].toUpperCase() + "Usted tiene hasta 12 cuotas con interes");
      break;
    case 4:
      alert("Con "+ pago[i].toUpperCase() + "Usted puede abonar en 1 pago");
      break;
  }
}*/

