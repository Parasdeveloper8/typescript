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
}
};
