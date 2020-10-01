//Datos Cliente//

function Cliente (nombre, apellido, celular) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.celular = celular;
}

var arrayNuevoCliente = [];

var nombre = prompt("Por favor ingrese su nombre");
var apellido = prompt("Por favor ingrese su apellido");
var nombreCompleto = nombre + " " + apellido;
var celular = parseInt(prompt("Bienvenido/a a Vincenzo Studio" + " " + nombreCompleto + " " + "Ingrese su celular solo con numeros por favor"));

arrayNuevoCliente.push(new Cliente(nombre, apellido, celular));
 alert("La persona" + " " + arrayNuevoCliente[0].nombre + " " + arrayNuevoCliente[0].apellido + " " + "cuyo celular es" + " " + arrayNuevoCliente[0].celular + " " + "es un nuevo cliente");

//Servicio a contratar//

function Service(sections, tienda, mantenimiento, webExpres) {
    this.sections = sections;
    this.tienda = tienda;
    this.mantenimiento = mantenimiento;
    this.webExpres = webExpres;
}


var sections= parseInt(prompt("Ingrese la cantidad de sections que tendrá el sitio"));
var tienda = prompt("Necesita una tienda online en su web?");
var mantenimiento = prompt("Desea contratar servicio de mantenimiento para su sitio?");
var webExpres = prompt("Necesita su sitio dentro de los prox 10 dias?");


preciototal(Service);

function preciototal(Service){ 
if (tienda == "si") {
  tienda=200;
} else {
  tienda=0;
}

if (mantenimiento == "si") {
  mantenimiento=100;
} else {
  mantenimiento=0;
}

if (webExpres == "si") {
  webExpres=150;
} else {
  webExpres=0;
}
}

var resultado = (sections+tienda+mantenimiento+webExpres);

var presupuesto = ("Su presupuesto es" + " " + resultado + " " + "U$D");

alert(presupuesto);
console.log(presupuesto);

//Medios de pago//


var pago = ["Transferencia", "Mastercard", "Visa", "American Express", "Maestro"];

for (var i = 0; i <= 5; i++){
  switch (i) {
    case 0:
      alert("Con "+ pago[i].toUpperCase() + "Usted tiene un 10% de descuento sobre el valor total");
      continue;
    case 1:
      alert("Con "+ pago[i].toUpperCase() + "Usted tiene hasta 3 cuotas sin interes");
      continue;
    case 2:
      alert("Con "+ pago[i].toUpperCase() + "Usted tiene hasta 6 cuotas sin interes");
      continue;
    case 3:
      alert("Con "+ pago[i].toUpperCase() + "Usted tiene hasta 12 cuotas con interes");
      continue;
    case 4:
      alert("Con "+ pago[i].toUpperCase() + "Usted puede abonar en 1 pago");
      continue;
    case 5:
      alert("Con "+ pago[i].toUpperCase() + "Usted tiene hasta 3 cuotas sin interes");
    break;
  }
}