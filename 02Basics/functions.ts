//giving default value
const greetingsBy=(name: string,age: number=15)=>{
        return name + "Hello";
        console.log("Your age is",age);
}
//void means function doesn't return any value ,absence of value
//never means function never returns  ex:- infinite loop,throw error
greetingsBy("paras");

//return something
function addTwo(num1 : number,num2 : number):number{
        return num1+num2
}

const user = {
        name:"paras",
        email:878
}
//return object
const sendObj=({name,email}): {name:string,email:string}=>{
     return {name,email}
}

var p = sendObj(user)
export{}