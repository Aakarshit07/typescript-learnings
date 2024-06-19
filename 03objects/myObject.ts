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
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }


// here our user is of TYPE User
// function createUser(user: User): User {
//     return { name: "", email: "", isActive: true
//     }
// }

// createUser({name: "", email: "", isActive: true});



//? Readonly *********

type User = {
    readonly _id: string; // cannot change it
    name: string;
    email: string;
    isActive: boolean;
    creditcardDetails?: number //option as we marked it by * ? *
}



let myUser: User = {
    _id: "12345",
    name: "Aakarshit",
    email: "a@a.com",
    isActive: false,
}

//! Can't do this.
//! myUser._id = "12345";


type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

 type cardDetails = cardNumber & cardDate & {
    cvv: number;
}




//? Can do this
myUser.email = "b@b.com";








export {}
