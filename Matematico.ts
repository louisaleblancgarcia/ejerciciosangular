function Suma (num1:number, num2:number):number{
    let resultado = num1 + num2;
    return resultado;
}

function Resta (num1:number, num2:number):number{
    let resultado = num1 - num2;
    return resultado;
}



function Multipicacion (num1:number, num2:number):number{
    let resultado = num1 * num2;
    return resultado;
}
function Divide(num1:number, num2:number):number{

    let resultado = num1 / num2;
    return resultado;
} 


var mayorNumeros = (num1: number, num2:number) => {
    var resultado;
    if(num1> num2 ){
        resultado = `El mayor de los numeros es ${num1}`
    }
    else if(num1< num2 ){
        resultado = `El mayor de los numeros es ${num2}`
    }
    else{
        return "Los numeros son iguales";
    }

    return resultado;

}


function AgregaUsuario(nombreUsuario:string, roles:string):string{

    enum Roles {roles};
    let roless : Roles = Roles.roles;
    return `El usuario ${nombreUsuario} se agrego con el rol de:${roless}`;
}