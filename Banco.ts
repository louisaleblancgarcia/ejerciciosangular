//definir operaciones deposito, retiro  y consultar Salo
// crear clases CuentaPersonal y CuentaEmpresarial

// crear interfaz ICuentaDeCredito que herede de ICuenta
// agregar operacion calculaIntereses
// Crear clase TarjetaDeCredito relacionada con ICuentaDeCredito
//crear objeto de cada clase y ver que e puedan los metodos de correspondal al tipo de objeto

interface ICuenta{
    
    

    deposito():number;
    retiro():number;
    consultarSaldo():number;


}

class CuentaPersonal implements ICuenta{
    private depposito:number = 0;
    private rettiro:number = 0;
    private interes:number = 0;
    constructor(d:number,r:number,i:number){
        this.depposito = d;
        this.rettiro =r;
        this.interes = i;
    }
   
    

    deposito(){
        return this.depposito;
    }
    retiro(){
        return this.rettiro;
    }
    consultarSaldo(){
        return 0;
    }
    calculaIntereses(){
        return 0;
    }
}
let cuentaPersonal: CuentaPersonal = new CuentaPersonal(200,12, .12);
console.log(cuentaPersonal.deposito());
console.log(cuentaPersonal.retiro());
console.log(cuentaPersonal.calculaIntereses());

class CuentaEmpresarial implements ICuenta{
    deposito(){
        return 0;
    }
    retiro(){
        return 0;
    }
    consultarSaldo(){
        return 0;
    }
    calculaIntereses(){
        return 0;
    }

}

interface IcuentaCredito extends ICuenta{
    
    deposito():number;
    retiro():number;
    consultarSaldo():number;
    calculaIntereses():number;

}

class TarjetaDeCredito implements IcuentaCredito{

    deposito(){
        return 0;
    }
    retiro(){
        return 0;
    }
    consultarSaldo(){
        return 0;
    }
    calculaIntereses(){
        return 0;
    }
}