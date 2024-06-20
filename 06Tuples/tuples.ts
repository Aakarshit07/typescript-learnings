//when we want to have array elements in specific order. like in API calls.

let tuser: [string, number, boolean];

tuser = ["hc", 132, true];
//! Can't do this 
//! user = [true, 132, "hc"];
tuser = ["hc", 132, true];


let rgb: [number, number, number] = [255, 255, 255]

type DUser = [number, string]

const newUser: DUser = [123, "aakarshit"]

newUser[1] = "Hello"


newUser.push(true);