"use strict";
var myBoolean = true;
var myNumber = 1234;
var myStringArray = [`first`, `second`, `third`];
let flag = false;
let dato = 'dato cadena';
console.log(dato);
dato = 1000;
console.log(dato);
dato = true;
console.log(dato);
const prueba = 'pato';
var Brands;
(function (Brands) {
    Brands[Brands["Chevrolet"] = 0] = "Chevrolet";
    Brands[Brands["Ford"] = 1] = "Ford";
    Brands[Brands["Cadillac"] = 2] = "Cadillac";
})(Brands || (Brands = {}));
let carro = Brands.Ford;
function SaludaAlUsuario() {
    console.log('hola usuario');
}
let marca = "bachoco";
marca = "bachoco";
function SumaDeNumeros(num1, num2) {
    let suma = 0;
    if (Array.isArray(num1)) {
    }
    return suma;
}
class Persona {
    constructor(n, ap, am, mayorDeEdad) {
        this.mayorDeEdad = mayorDeEdad;
        this.nombre = '';
        this.apellidoMaterno = '';
        this.apellidoPaterno = '';
        this.nombre = n;
        this.apellidoPaterno = ap;
        this.apellidoMaterno = am;
    }
    getIne() {
        return this.mayorDeEdad ? "Puede tramitar INE" : "No puede tramitar INE";
    }
}
class Rectaangulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
        this.color = "Rojo";
    }
    calculaArea() {
        return this.base * this.altura;
    }
}
class Triangulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
        this.color = "Rojo";
    }
    calculaArea() {
        return (this.base * this.altura) / 2;
    }
}
//utiliza herencia de triangulo con extends
class TrianguloEscaleno extends Triangulo {
}
class TrianguloIsoceles extends Triangulo {
}
class Circulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
        this.color = "Morado";
        this.diametro = 19;
    }
    calculaArea() {
        return this.base * this.altura;
    }
}
let miTriangulo = new TrianguloEscaleno();
miTriangulo.color = "verde";
miTriangulo.calculaArea();
