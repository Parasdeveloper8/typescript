//Readonly and optional

//readonly means once assigned can't be changed
type User = {
    readonly name:string,
    age:number,
    creditcard?:number //optional some user can not hold credit card
}

let bankUser: User = {name:"Paras",age:15}//It will run without any error because 
//creditcard is optional

//It will not run because this property is readonly
//bankUser.name = "navin";
export{}