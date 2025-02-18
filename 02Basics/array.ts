//Arrays in typescript


let powerRangers : string[]=[]
powerRangers.push("Jack")

let powerOfRangers :Array<Number> = []
powerOfRangers.push(10)

type User = {
    isActive:boolean
}

let users:User[] = []
users.push({isActive:true})

//Array of array
let mlModals: number[][] = [
    [1,2,3],
    [1,2,3]
]

export {}