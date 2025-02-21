//classes

class Developer{
    public skill:string[]
    readonly name:string
    readonly age:number
    protected working:boolean = false
     private id:string = "abcd3"
    constructor(skillc:string[],namec:string,agec:number){
        this.skill = skillc;
        this.age = agec;
        this.name = namec;
    }
    //getters and setters :=
    //We can use to expose private property by using some predefined methods

    get getSkill():string[]{
        console.log(this.skill);
         return this.skill;
    }

    //We cannot use any return type with set method
     set Working(state:boolean){
          this.working = state;
          console.log(this.working);
    }
    
    //private method
    private setId(value:string){
        this.id = value;
    }
}
class Programmer extends Developer{
     work(state:boolean){
        this.working = true;
    }
}
const paras = new Developer(["HTML","CSS","JS"],"paras",15);
//paras.working; 
//Private property can be only accessed within class.
//Every property before which you have not written private is public
//public ,protected and private are access modifiers
//protected can be used within that class and its subclass
paras.skill;
console.log(paras.getSkill);
paras.Working = false;
export{}