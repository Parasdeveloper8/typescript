abstract class Paras{
    public name:string
    constructor(name:string){
       this.name = name;
       console.log("parent",this.name);
    }
    abstract getName():void
    get getReelTime():number{
        return 60;
    }
}
//We can't define any instance of abstract class
//This class can be extended by other inherit class
//const paras = new Paras() //fail to create instance

class ParasP extends Paras{
    constructor(name:string){
        super(name);//call Paras constructor
    }
    getName(): void {
        console.log(this.name);
    }
}

//abstract class can only be accessed by its children.
//We can't make direct instance from abstract class
const newParas = new ParasP("paras");
export{}