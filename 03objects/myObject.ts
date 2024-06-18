// const User = {
//     name: "Aakarshit",
//     email: "a@a.com", 
//     isActive: true,
//     isPaid: true,
// }


// function createUser({name: string, isPaid: boolean}) {}

//! Cannot do these :
    //* createUser()
    //* createUser({})
    //* createUser({name: "Soul", price: 399, isPaid: false})  
//! Will Throw and error;

//? Can do :
// createUser({name: "Soul", isPaid: false});

// There's Still bettwe way of doing it.
// let newUser = {name: "Soul", price: 399, isPaid: false}
// createUser(newUser);



//? Object Parameter and returns Object
//* Here we set function return type as object
//* Then we have function scope. 
//* function createCourse():{}{
//*     return {}
//* }

//* function createCourse():{name: "Soul", price: number}{
//*     return {name: "Soul", price: 399}
//* }




// Type aliases
type User = {
    name: string;
    email: string;
    isActive: boolean
}


// here our user is of TYPE User
function createUser(user: User): User {
    return { name: "", email: "", isActive: true
    }
}

createUser({name: "", email: "", isActive: true});

export {}
