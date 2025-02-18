//Type aliases
//This is similar to struct in golang

type User = {
    name:string,
    email:string
}

//function
function createBill(user: User):User{
    return {name:"",email:""}
}

createBill({name:"paras",email:"ppdev8"})
export {}