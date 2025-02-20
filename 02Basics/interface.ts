//interface contains methods with no implementation

interface Student{
    class:number,
    moniter?:boolean,
    readonly name:string,
    routine():void,//It is method with no implementation
}

const paras:Student = {class:10,moniter:false,name:"paras",routine() {
       console.log("Wake up at 6:20 AM");
       console.log("Do exercise");
},id:"abcd4u"
};

//reopening interface
interface Student {
    id:string
}

//inheritence in interface
interface StudentTwo extends Student{
    role:string
}

//difference b/w type aliases and interface
//interface can be opened again but not type aliases
//interface can contain methods in it but type aliases can't
//interface supports inheritence but not type aliases
export {}