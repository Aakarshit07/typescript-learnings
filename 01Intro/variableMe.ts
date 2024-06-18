let greetings: string = "Hello Aakarshit";
// I cannot do this
// greetings = 10;
// Suggstion will be for only string if i do greetings[dot]
greetings.toUpperCase();
console.log(greetings);


//Number

let userId: number = 112233;

// even using float 2345.4455 its always going ot be a number


//Boolean

let isLoggedIn: boolean = false;



//any
// it is not an type  instead it is an marker that is used when we need to turn off the type checking of typescript.

//when ts cannot infer the type it is (or ts cannot findout what kind of value come up in future) it puts that as any
// Example: let hero;  

let hero: string;

function  getHero() {
    return "thor";
}

hero = getHero();

export {};