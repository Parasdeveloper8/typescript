//union is a combination of two or more data types that you can include in
//  array or variable or anything
// ( | )pipe sign
//& (Ampersand)

let score: number|string= 45;
score = "out";


type User = {
     userId : string
}

type Admin = {
      adminId : string
}

let userAdmin : User | Admin = {userId:"3"};

//array
let fruit : string[] | number[] = ["s"]; // (string | number)[]

let operations : Array <number|string> = ["a",1];

let pi:3.14 = 3.14;

export {}