"use strict";
var myBoolean : boolean = true;
var myNumber : number = 1234;
var myStringArray : string[] = [`first`,`second`,`third`];
let flag = false;
let dato : any = 'dato cadena';
console.log(dato);
dato = 1000;
console.log(dato);
dato = true;
console.log(dato);
type Animal = 'vaca' | 'pato';
const prueba : Animal = 'pato';

enum Brands {Chevrolet, Ford, Cadillac}
let carro : Brands = Brands.Ford

function SaludaAlUsuario() : void{
    console.log('hola usuario');
}

let marca = "bachoco";
marca = "bachoco";

function SumaDeNumeros(num1:number,num2?:number): number;

function SumaDeNumeros(num1:number[], num2?:number): number;

function SumaDeNumeros(num1:any, num2?:number):number{
    let suma = 0;
    if(Array.isArray(num1)){


    }
    return suma;
}

class Persona{
    private nombre:string = '';
    private apellidoMaterno:string = '';
    private apellidoPaterno:string = '';
    

    constructor(n:string, ap:string,am:string, private mayorDeEdad:boolean){
        this.nombre = n;
        this.apellidoPaterno = ap;
        this.apellidoMaterno= am;
    }

    getIne(){
        return this.mayorDeEdad?"Puede tramitar INE":"No puede tramitar INE";
    }
}


interface FiguraGeometrica{
    color:string;
    diametro?:number;
    calculaArea():number;
}

class Rectaangulo implements FiguraGeometrica{

    private base:number = 0;
    private altura:number = 0;
    color:string = "Rojo"
    calculaArea(){

        return this.base * this.altura;
    }

}

class Triangulo implements FiguraGeometrica{


    private base:number = 0;
    private altura:number = 0;
    color:string = "Rojo";
   
    calculaArea(){

        return (this.base* this.altura)/2;
    }
}

//utiliza herencia de triangulo con extends
class TrianguloEscaleno extends Triangulo{


  
}
class TrianguloIsoceles extends Triangulo{


  
}


class Circulo implements FiguraGeometrica{
    private base:number = 0;
    private altura:number = 0;
    color:string = "Morado"
    diametro:number = 19;
    calculaArea(){

        return this.base* this.altura;
    }
}

let miTriangulo:TrianguloEscaleno = new TrianguloEscaleno()
miTriangulo.color = "verde"
miTriangulo.calculaArea();