

//Scroll

$("#bottonStart").click(scrollCalculo)

function scrollCalculo() {
    $("html, body").animate(
        {
            scrollTop: $("#scroll").offset().top
        },
        1500
    )
}

$("#acerca").click(scrollAcerca)

function scrollAcerca() {
  $("html,body").animate(
    {
      scrollTop: $("#acerca").offset().top
    },
    1500
  )
}

$("#irservicios").click(scrollServicios)

function scrollServicios() {
  $("html,body").animate(
    {
      scrollTop: $("#servicios").offset().top
    },
    1500
  )
}

$("#ircontacto").click(scrollContacto)

function scrollContacto() {
  $("html,body").animate(
    {
      scrollTop: $("#contacto").offset().top
    },
    1500
  )
}

//Datos Cliente//

function Client (nombre, mail, dni) {
  this.nombre = nombre;
  this.email = mail;
  this.dni = parseInt(dni);
}
//Servicio a contratar//
function Service(sections, tienda, mantenimiento, webExpress) {
    this.sections = parseInt(sections);
    this.tienda = tienda;
    this.mantenimiento = mantenimiento;
    this.webExpress = webExpress;
}




$("#formasPago").click (mostrarPagos);

function mostrarPagos() {

  $.ajax({
    url: "json/ejemplo.json",
    type: "GET",
    dataType: "json"

  }).done( function(resultadoJson) {
    var pagoselemento = document.createElement("h4");
    var pagostexto = document.createTextNode(resultadoJson.detalles[0].id);
    pagoselemento.appendChild(pagostexto);
    $("#formPresupuesto").append(pagoselemento);

  })/*.fail( function(xhr, status, error) {
    console.log(xhr);
    console.log(status);
    console.log(error);
  })*/
}

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




$("#saveChanges").click( function submitForm() {
  let formNombre = $("#inputNombre").val() ;
  console.log(formNombre);
  let formDni = $("#inputDni").val();
  console.log(formDni);
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
  let cliente1 = new Client(formNombre, formEmail, formDni);
  mostrarPresupuesto(servicio1, cliente1);
  guardarCliente(cliente1);
})


/*$(function(){
  $("#saveChanges").on("click", function() {
    $("#formPresupuestoModal").validate
    ({
      rules:
      {
        email: {required: true, email: true, minlength: 8, maxlenght: 80}
      },
      messages:
      {
        email: {required: 'Ingrese un email', email: 'El formato no es válido', minlength: 'ingrese un email valido', maxlenght: 'ingrese un email valido'}
      }
    });
  });
} );*/




/*
validarForm();

$("formPresupuesto").submit(function validarForm() {
  valor = $("#inputNombre").val();

  if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
    alert('[ERROR] El campo debe tener un valor de...');
    return false;
  } 

  valor = $("inputDni").val();

  else if ( !(/^\d{9}$/.test(valor)) )  {
    // Si no se cumple la condicion...
    alert('[ERROR] El campo debe tener un valor de...');
    return false;
  }

  ...
  else if (condicion que debe cumplir el último campo del formulario) {
    // Si no se cumple la condicion...
    alert('[ERROR] El campo debe tener un valor de...');
    return false;
  }

  // Si el script ha llegado a este punto, todas las condiciones
  // se han cumplido, por lo que se devuelve el valor true
  return true;
}

})*/



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
  let jsonCliente = { nombre: cliente2.nombre, dni: cliente2.dni, mail: cliente2.email }
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
  document.getElementById("inputDni").value = cliente['dni'];
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


