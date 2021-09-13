"use strict";
function Suma(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}
function Resta(num1, num2) {
    let resultado = num1 - num2;
    return resultado;
}
function Multipicacion(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}
function Divide(num1, num2) {
    let resultado = num1 / num2;
    return resultado;
}
var mayorNumeros = (num1, num2) => {
    var resultado;
    if (num1 > num2) {
        resultado = `El mayor de los numeros es ${num1}`;
    }
    else if (num1 < num2) {
        resultado = `El mayor de los numeros es ${num2}`;
    }
    else {
        return "Los numeros son iguales";
    }
    return resultado;
};
function AgregaUsuario(nombreUsuario, roles) {
    let Roles;
    (function (Roles) {
        Roles[Roles["roles"] = 0] = "roles";
    })(Roles || (Roles = {}));
    ;
    let roless = Roles.roles;
    return `El usuario ${nombreUsuario} se agrego con el rol de:${roless}`;
}
