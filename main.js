
//const arrayNombres = ["Benelli 752 S","Benelli 502 C","Benelli Leoncino 250","Benelli Trk 502","Benelli Trk 502","Benelli Trk 251 Abs"];
//const arrayPrecios = ["2.750.000 $","1.920.000 $","885.900 $","2.215.000 $","2.510.000 $","993.900 $"]
let productos = [];
let total = 0;
function agregar(producto,precio){
    console.log(producto,precio);
    productos.push(producto);
    total += precio;
    document.getElementById("payoneer").innerHTML = `Son en total $${total}`
}
function pago(){
}
console.log(productos.join(", \n"));
