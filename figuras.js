//codigo del cuadrado
console.group("cuadrados");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm")

function perimetroCuadrado(lado) {
    return lado * 4;
}


//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}


//console.log("el perimetro del cuadrado es: " + areaCuadrado + "cm2")
console.groupEnd();
//codigo del triangulo
console.group("triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log("el perimetro del triangulo es: " + (ladoTriangulo1 + ladoTriangulo2 + baseTriangulo) + "cm")

//const alturaTriangulo = 5.5;
//console.log("la altura del triangulo es: " + alturaTriangulo + "cm");

//const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
//console.log("el area del triangulo es: " + areaTriangulo + "cm");;

function perimetroTriangulo(lado1, lado2, baseTriangulo){
    return lado1 + lado2 + baseTriangulo;
}

function areaTriangulo(base, altura){
    return (base * altura)/2;
}

console.groupEnd();

// codigo del circulo
console.group("circulos");

//radio
//const radioCirculo = 4;
//console.log("el radio del circulo es: " + radioCirculo + "cm")
//diametro
//const diametroCirculo = radioCirculo * 2;
//console.log("el diametro del circulo es: " + diametroCirculo + "cm")

function diametroCirculo(radio){
    return radio * 2;
}

//pi
const pi = Math.PI;
//console.log("pi es: " + pi + "cm")
//circunsferencia
//const perimetroCirculo = diametroCirculo * pi;
//console.log("el perimetro del circulo es: " + perimetroCirculo + "cm")

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

//area
//const areaCirculo = (radioCirculo * radioCirculo) * pi;
//console.log("el area del circulo es: " + areaCirculo + "cm2")

function areaCirculo(radio) {
    return (radio * radio) * pi; 
}

console.groupEnd();

// aqui interactuamos con html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;



    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;



    const area = areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("inputTriangulo3");
    const value3 = Number(input3.value);

    const perim = perimetroTriangulo(value1, value2, value3);
    alert(perim);
}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("inputTriangulo3");
    const value3 = input3.value;

    const input4 = document.getElementById("inputTriangulo4");
    const value4 = input4.value;

    const area = areaTriangulo(value3, value4);
    alert(area);
}



function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;



    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;



    const area = areaCirculo(value);
    alert(area);
}

// Triangulo Isoceles

function calcularAlturaIsoceles(){
    const inputLado1 = document.getElementById('inputIsocelesLado1');
    const valueLado1 = inputLado1.value;

    const inputLado2 = document.getElementById("inputIsocelesLado2");
    const valueLado2 = inputLado2.value;

    const inputBase = document.getElementById("inputIsocelesBase");
    const valueBase = inputBase.value;

    if (valueLado1 === valueLado2 && valueLado2 != valueBase){
        
        const altura = Math.sqrt(valueLado1**2 - valueBase**2 / 4)
        
        alert("este es un triangulo isoceles y su altura es " + altura + "cm" )
    }
    else{
        alert("este no es isoceles")
    }
    
    
}