//const precioOriginal = 120;
//const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
   
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento / 100);

    return precioConDescuento;
}


//console.log({
//    precioOriginal,
//   descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento
//})

function priceDiscount(){
    const inputPrice = document.getElementById("price")
    const priceValue =  inputPrice.value ;
   
    const inputDiscount = document.getElementById("discount")
    const discontValue =  inputDiscount.value ;

    const precioFinal = calcularPrecioConDescuento(priceValue, discontValue);

    const resultPrice = document.getElementById("resultPrice")
    resultPrice.innerText = "el precio con descuento es $" + precioFinal;
}