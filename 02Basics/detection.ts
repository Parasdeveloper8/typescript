//The process of knowing the type of a variable is known as type narrowing,
//type of variable using typeof

//the in operator narrowing
interface One{
    name:string,
    age:number
}

interface Two{
    name:string,
    value:string
}
function detect(value:One|Two){
    if("value" in value){
        value.value;
    }
    if("age" in value){
        value.age;
    }
}

//instanceof means if variable is instance of any class or constructed using new keyword

//type predicate
function typePred(arg:any):arg is number{
    return typeof arg === "number";
}
typePred(42);

//Discriminated union and exhaustiveness checking
//"discriminative union" just means a union of types that share a common property to make type narrowing easy and safe. 

//Exhaustiveness checking ensures that all possible cases of a discriminated union are handled, so if a new type is added later, TypeScript will warn you if it's missing in a switch statement.
export{}