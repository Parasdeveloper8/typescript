//Generics
function sendAnything(arg:any):any{
    return arg;
}

//call this function and inspect it to see data type
sendAnything("paras");//The argument is string but data type is still any

//generic
function sendAny<Type>(arg:Type):Type{ //Type = T
       return arg;
}
//call this function and inspect
sendAny<string>("paras");//The argument is "paras" and "paras" is data type now
sendAny("paras");
sendAny<number>(2);

const sendName = <T>(name:T[]):T[] => {
    return name
}
             //or

const sendNames = <T,>(names:T[]):T[] =>{
    return names
}

interface DB{
    conString:string,
    user:string,
    port:number
}
const arr:DB = {conString:"abcd",user:"pp",port:4900};
function createPool<T,U extends DB>(arg:T,argt:U):object{
    return {
       arg
       ,argt
    }
}
createPool("Paras",arr);

//Generic class
class Developer<T>{
        skill:T[]
        constructor(skills:T[]){
            this.skill = skills;
        }
        get getSkills():T[]{
            console.log(this.skill);
            return this.skill
        }
}
const skls:string[] = ["HTML","Css"];
const paras = new Developer(skls);
paras.getSkills;
export{}