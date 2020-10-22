

/*
let arrayNuevoCliente = [];

let nombre = prompt("Por favor ingrese su nombre");
let apellido = prompt("Por favor ingrese su apellido");
let nombreCompleto = nombre + " " + apellido;
let celular = parseInt(prompt("Bienvenido/a a Vincenzo Studio" + " " + nombreCompleto + " " + "Ingrese su celular solo con numeros por favor"));

arrayNuevoCliente.push(new Cliente(nombre, apellido, celular));
 alert("La persona" + " " + arrayNuevoCliente[0].nombre + " " + arrayNuevoCliente[0].apellido + " " + "cuyo celular es" + " " + arrayNuevoCliente[0].celular + " " + "es un nuevo cliente");

 

//Datos Cliente//

function Client (nombre, mail) {
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

/*let servicio = new Service(sections, tienda, mantenimiento, webExpres);


function totalPrice(param){ 

 
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
console.log(presupuesto);

function submitForm() {
  let formNombre = $("#inputNombre").val() ;
  console.log(formNombre);
  let formEmail = $("#inputEmail").val() ;
  console.log(formEmail);
  let formSecciones = $("#selectSecciones").val() ;
  console.log(formSecciones);
  let formTiendaOnline = $("#selectTiendaOnline").val() ;
  console.log(formTiendaOnline);
  let formMantenimiento = $("#selectMantenimiento").val() ;
  console.log(formMantenimiento);
  let formWebExpress = $("#selectWebExpress").val() ;
  console.log(formWebExpress);
  
  let servicio1 = new Service(formSecciones, formTiendaOnline, formMantenimiento, formWebExpress);

  let cliente1 = new Client(formNombre, formEmail);
  mostrarPresupuesto(servicio1, cliente1);
  guardarCliente(cliente1);
}



/*function mostrarPresupuesto(servicio, cliente) {
  let resultado = totalPrice(servicio);
  let formPresupuesto = document.getElementById("formPresupuesto"); 
  let totalPresupuesto = document.createElement("h3");
  let textPresupuesto = document.createTextNode ("Hola "+ cliente.nombre + ", su presupuesto es " + resultado + "U$D");
  totalPresupuesto.appendChild(textPresupuesto);
  formPresupuesto.appendChild(totalPresupuesto);
  let presupuesto = ("Su presupuesto es" + " " + resultado + " " + "U$D");
  console.log(presupuesto);
}
$("#saveChanges").click(function mostrarPresupuesto(servicio,cliente) {
    let resultado = totalPrice (servicio);
    let formPresupuesto = $("formPresupuesto");
    let totalPresupuesto = document.createElement("h3");
    let textPresupuesto = document.createTextNode ("Hola "+ cliente.nombre + ", su presupuesto es " + resultado + "U$D");
    totalPresupuesto.appendChild(textPresupuesto);
    formPresupuesto.appendChild(totalPresupuesto);
    let presupuesto = ("Su presupuesto es" + " " + resultado + " " + "U$D");
    console.log(presupuesto);
  });




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

cargarCliente();*/

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




/*
let arrayNuevoCliente = [];
let nombre = prompt("Por favor ingrese su nombre");
let apellido = prompt("Por favor ingrese su apellido");
let nombreCompleto = nombre + " " + apellido;
let celular = parseInt(prompt("Bienvenido/a a Vincenzo Studio" + " " + nombreCompleto + " " + "Ingrese su celular solo con numeros por favor"));
arrayNuevoCliente.push(new Cliente(nombre, apellido, celular));
 alert("La persona" + " " + arrayNuevoCliente[0].nombre + " " + arrayNuevoCliente[0].apellido + " " + "cuyo celular es" + " " + arrayNuevoCliente[0].celular + " " + "es un nuevo cliente");*/

//Scroll

$("#bottonStart").click(scrollear)

function scrollear() {
    $("html, body").animate(
        {
            scrollTop: $("#scroll").offset().top
        },
        1500
    )
}


//Datos Cliente//

function Client (nombre, mail) {
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
function totalPrice(param){ 
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


$("#saveChanges").click( function submitForm() {
  let formNombre = $("#inputNombre").val() ;
  console.log(formNombre);
  let formEmail = $("#inputEmail").val() ;
  console.log(formEmail);
  let formSecciones = $("#selectSecciones").val() ;
  console.log(formSecciones);
  let formTiendaOnline = $("#selectTiendaOnline").val() ;
  console.log(formTiendaOnline);
  let formMantenimiento = $("#selectMantenimiento").val() ;
  console.log(formMantenimiento);
  let formWebExpress = $("#selectWebExpress").val() ;
  console.log(formWebExpress);
  let servicio1 = new Service(formSecciones, formTiendaOnline, formMantenimiento, formWebExpress);
  let cliente1 = new Client(formNombre, formEmail);
  mostrarPresupuesto(servicio1, cliente1);
  guardarCliente(cliente1);
})
/*function mostrarPresupuesto(servicio, cliente) {
  let resultado = totalPrice(servicio);
  let formPresupuesto = document.getElementById("formPresupuesto"); 
  let totalPresupuesto = document.createElement("h3");
  let textPresupuesto = document.createTextNode ("Hola "+ cliente.nombre + ", su presupuesto es " + resultado + "U$D");
  totalPresupuesto.appendChild(textPresupuesto);
  formPresupuesto.appendChild(totalPresupuesto);
  let presupuesto = ("Su presupuesto es" + " " + resultado + " " + "U$D");
  console.log(presupuesto);
}*/

function mostrarPresupuesto(servicio,cliente) {
    console.log(servicio)
    console.log(cliente)
    let resultado = totalPrice (servicio);
    //let formPresupuesto = $("#formPresupuesto");
    let totalPresupuesto = document.createElement("h3");
    let textPresupuesto = document.createTextNode ("Hola "+ cliente.nombre + ", su presupuesto es " + resultado + "U$D");
    totalPresupuesto.appendChild(textPresupuesto);
    $("#formPresupuesto").append(totalPresupuesto);
    let presupuesto = ("Su presupuesto es" + " " + resultado + " " + "U$D");
    console.log(presupuesto);
}

function guardarCliente(cliente2) {
  console.log(cliente2)
  let jsonCliente = { nombre: cliente2.nombre, mail: cliente2.email }
  console.log(jsonCliente);
  console.log(jsonCliente['nombre'])
  let stringifyJson = JSON.stringify(jsonCliente);
  console.log(stringifyJson);
  localStorage.setItem('cliente', stringifyJson);
}

cargarCliente();

function cargarCliente() {
  let stringifyClient = localStorage.getItem('cliente')
  console.log(stringifyClient);
  let cliente = JSON.parse(stringifyClient);
  console.log(cliente['nombre']);
  document.getElementById("inputNombre").value = cliente['nombre'];
  document.getElementById("inputEmail").value = cliente ['mail'];
}

/*obtenerCliente();

function obtenerCliente() {
  if (localStorage.getItem('cliente')) {
    console.log(localStorage.getItem('cliente'))
  } else {
    console.log ('No existe elemento en local storage')
  }
}



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


