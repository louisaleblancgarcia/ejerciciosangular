"use strict";
//definir operaciones deposito, retiro  y consultar Salo
// crear clases CuentaPersonal y CuentaEmpresarial
class CuentaPersonal {
    constructor(d, r, i) {
        this.depposito = 0;
        this.rettiro = 0;
        this.interes = 0;
        this.depposito = d;
        this.rettiro = r;
        this.interes = i;
    }
    deposito() {
        return this.depposito;
    }
    retiro() {
        return this.rettiro;
    }
    consultarSaldo() {
        return 0;
    }
    calculaIntereses() {
        return 0;
    }
}
let cuentaPersonal = new CuentaPersonal(200, 12, .12);
console.log(cuentaPersonal.deposito());
console.log(cuentaPersonal.retiro());
console.log(cuentaPersonal.calculaIntereses());
class CuentaEmpresarial {
    deposito() {
        return 0;
    }
    retiro() {
        return 0;
    }
    consultarSaldo() {
        return 0;
    }
    calculaIntereses() {
        return 0;
    }
}
class TarjetaDeCredito {
    deposito() {
        return 0;
    }
    retiro() {
        return 0;
    }
    consultarSaldo() {
        return 0;
    }
    calculaIntereses() {
        return 0;
    }
}
