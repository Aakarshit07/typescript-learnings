// 10class part

// class User {
//     public email: string //everything at default public marked as public and we can mark it as well.
//     name: string
//     private readonly city: string = "Delhi" // suppose dont wwant any one to be able to access it
//     constructor(email: string, name: string) {
//     //here to fix email type we use to inform typescript before constructors
//         this.email = email;
//         this.name = name;
//     }
// }

//! Don't do this
// const hitesh = new User(email: "a@a.com", name: "soul")

// Can do this
// const soul = new User("a@a.com", "soul")
// soul.email



/*Professional way*/
// 11Private and public property

// Added 12 getter and setter
class User {

    private _courseCount = 1;

    readonly city: string = "Delhi"
    constructor(
        public email: string, 
        public name: string,
        private userId: string
        ){
        this.email = email   
        this.name = name   
        this.userId = userId   
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    // setter doesnt have return type 
    set courseCount(courseNum) {
        if(courseNum <= 1) {
           throw new Error("Course count should be greater than 1")
        }
        this._courseCount = courseNum
    } 

    private deleteToken() {
        console.log("Token deleted");
    }
}