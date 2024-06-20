let score: number | string = 33;
score = 44;
score = "200";


type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let aakarshit: User | Admin = {name: "Aakarshit", id: 234}

aakarshit = {username: "ac", id: 321}


// function getDBId(id: number | string) {
//     making some API calls
//     console.log(`DB id is ${id}`);
// }



getDBId(3);
getDBId("3");


function getDBId(id: number | string) {
    //getting swiggly lines on below methods
    if(typeof id === "string"){
        id.toLowerCase();
    }
    
    // Thats beacuse here id is acting as unique data type. 
    // That eventually it can be either number or string.
    // Thats why we need strong check.
}


const data1: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3", "5"];
//Either all number or all string
const data3: string[] | number[] = ["1", "2", "3", "5"];

//Can have both string and numbers
const data4: (string | number)[] = [1, 2, "3", "5"];


//setting littral or very strict type
let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";