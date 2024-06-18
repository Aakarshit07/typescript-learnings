function addTwo(num: number) {
    // we also need to typecheck the parameters
    return num + 2;
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name:string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email:string, 
isPaid: boolean = false) => {}

addTwo(5);
getUpper("Soul");
signUpUser("Aakarshit", "xyz@dev.com", false);
loginUser("A", "a@a.com");



// what if function return statement return different type?
// To make sure that we uses this
function AddThree(num: number): number {
    // return "hello";
    return num + 3;
}

AddThree(5);



// function getValue(myVal:number): boolean {
//     if(myVal > 5) {
//         return true;
//     }
//     return "200 Ok";

// }


const getHello = (s: string): string => {
    return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

//here hero automatically detects whats type its parameter is.
heros.map((hero): string => {
    return `hero is ${hero}`;
});


function consoleError(errmsg: string): void{
    console.log(errmsg);
}

// some function nevre return anything
// for more check docs.
function handleError(errmsg: string): never{
    throw new Error(errmsg);
}


export {};
