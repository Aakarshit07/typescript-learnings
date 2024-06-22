// 10class part
class User {
    email: string
    name: string
    readonly city: string = "Delhi"
    constructor(email: string, name: string) {
    //here to fix email we use inform typescrip before constructors
        this.email = email;
        this.name = name;
    }
}

//! Don't do this
// const hitesh = new User(email: "a@a.com", name: "soul")

// Can do this
const soul = new User("a@a.com", "soul")
// console.log(soul);