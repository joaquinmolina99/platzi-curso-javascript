const cupons = [
    "joaquin",
    "molina",
    "alejandro"
];


function calcularPrecioConDescuento(precio, descuento){
   
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento / 100);

    return precioConDescuento;
}

function priceDiscount(){
    const inputPrice = document.getElementById("price")
    const priceValue =  inputPrice.value ;
   
    const inputCupon = document.getElementById("cuponDiscount");
    const cuponValue = inputCupon.value;
    
    let descuento;

    switch(cuponValue) {
        case cupons[0]: descuento = 15;
        break;
        case cupons[1]: descuento = 30;
        break;
        case cupons[2]: descuento = 25;
        break;
    }


    const precioFinal = calcularPrecioConDescuento(priceValue, descuento);


    const resultPrice = document.getElementById("resultPrice")
    
    if (!cupons.includes(cuponValue)) {
        resultPrice.innerText = "El cupón " + cuponValue + " no es válido";
    }
    else
    resultPrice.innerText = "el precio con descuento es $" + precioFinal;

}