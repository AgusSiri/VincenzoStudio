function Service(sections, tienda, mantenimiento, webExpres) {
    this.sections = sections;
    this.tienda = tienda;
    this.mantenimiento = mantenimiento;
    this.webExpres = webExpres;
}
  
var service = new Service(sections, tienda, mantenimiento, webExpres);//

var sections= parseInt(prompt("Ingrese la cantidad de sections que tendrá el sitio"));
sections= (sections)*20

var tienda = prompt("Necesita una tienda online en su web?");

var mantenimiento = prompt ("Desea contratar servicio de mantenimiento para su sitio?");

var webExpres = prompt ("Necesita su sitio dentro de los prox 10 dias?");

var arrayService = [];


if (tienda == "si") {
  tienda=200
} else {
  tienda=0
}

if (mantenimiento == "si") {
  mantenimiento=100
} else {
  mantenimiento=0
}

if (webExpres == "si") {
  webExpres=150
} else {
  webExpres=0
}

var resultado = (sections+tienda+mantenimiento+webExpres);

var presupuesto = ("Su presupuesto es" + resultado + "U$D")

alert(presupuesto);
console.log(presupuesto);
