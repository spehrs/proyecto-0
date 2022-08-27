class Operation {
    constructor() {
     this.valuA=0;
     this.valuB=0;
     this.resul=0;
 }

 set valuA(value:number){
     this.valuA=value;
 }
  set valuB(value:number){
     this.valuB=value;
 }
 set resul(value:number){
     this.resul=value;
 }
 get resul():number {
     return this.resul;
 }
}
class Sumar extends Operation {
 Sumar(){
     this.resul=this.valuA + this.valuB;
 }
}
class Restar extends Operation {
 Restar(){
     this.resul=this.valuA + this.valuB;
 }
}
let operS=new Sumar();
operS.valuA=2;
operS.valuB=3;
operS.Sumar();
console.log("el rtdo es" + operS.resul);

let operR=new Restar();
operR.valuA=2;
operR.valuB=3;
operR.Restar();
console.log("el rtdo es" + operR.resul);