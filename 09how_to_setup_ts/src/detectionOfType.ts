function detectType(val: number | string) {
  if (typeof val === "string") {
      return val.toLowerCase();
  } 
  return val + 3;

  //what if we have more than one type like and number array.
}

function provedeId(id: string | null) {
  if(!id) {
      console.log("Please provide ID");
      return;
  }
  id?.toLowerCase();
}


function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}


interface User {
  name: string,
  email: string
}

interface Admin {
  name: string,
  email: string,
  isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
  // we can't return admin becauser the propert is in admin or not
    
  // here we checking if isAdmin in accound or not
  if("isAdmin" in account) {
    return account.isAdmin
  }
}



// Anything that uses new keyword 
// using instanceof can be used to check the instance of and 
// can mostly be use where there is an new keyword.

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());      
  }
}

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if(isFish(pet)) {
    pet
    return "fish food"
  } else  {
    pet
    return "bird food"
  }
} 



// Discriminated Unions
// only there to check ki interface type vo hai jo hame chaiye ya koi aur
// like a property finder.
// ki internface circle hai to uske ander kind circle kind property hai.
// agar jo hame chaiye vo hi kind hai to ham usko use krke kaam maine krsakte hai.


interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if(shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  //return shape.side * shape.side;
}



// Here we using exaustive check 
function getArea(shape: Shape) {
  switch(shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    
    case "square":
      return shape.side * shape.side; 
    case "rectangle":
      return shape.length * shape.width


    // Will never execute as it just work as to show that you need case if any new case/shape is provided 
    default:
      const _defaultforshape: never = shape
      return _defaultforshape  
  }  
}