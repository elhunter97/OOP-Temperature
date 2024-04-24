class Temperature{
    constructor(celcius){
        this.celcius = celcius;
    }
    getCelcius(){
        return this.celcius;
    }
    setCelcius(celcius){
        this.celcius = celcius;
    }
     convertCtoF(celcius){
        return 1.6*celcius+32;
     }

     convertCtoK(celcius){
        return celcius+273.5;
     }

}

let cel = new Temperature(25);
let c = cel.getCelcius();
console.log(c+'C = '+cel.convertCtoF(c)+' f');
console.log(c+'C = '+cel.convertCtoK(c)+' k');