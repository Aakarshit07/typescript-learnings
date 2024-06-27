const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number  {
    return val
    // now problem is that is can what if we wanna return string then we have to keep adding data types with || OR.
}

function identityTwo(val: any): any{
    return val;
    // now problem is typescript doesn't know what to return here. 
    // as well as the definiation or type and information is gone. 
    // and here we can take any type of input and return any type.
    // like taking number as param and returning string.
}

function identityThree<Type>(val: Type): Type{
    return val;
    // Here Type is almost same as *any* datatype
    // but here if i am passing the number the returning type will be number.
    // if i am passing the string the returning type will be string.
    // whatever the data type is passed it will lock that data type.
    // and only returns that data type. 
}

// Do it in short
// and instead of T we can name it like H, B, A, D, etc...

function identityFour<T>(val: T): T {
    return val;
}


// We can also define our own type as well


// if we creating our own data type.
// we have to pass it as whatever name it has
// like Bottle interface we created below
interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({brand: "Adidas", type: 1});


// How to take and input as Arrays

function getSearchProducts<T>(products: T[]): T {
    // do some database Operation
    // const myIndex = 3;
    
    // here i am returning the type of T
    // it means that it will return single vlaue from the T type array;
    return products[3];
}


// How to convert it into arrow function
const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some database Operation
    const myIndex = 4;
    return products[myIndex];
}

// Here i we create normal arrow functions
const getUserId = (products: number): number => {
    return products;
}   

interface Database {
    connection: string,
    username:string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3, {connection: "", username:"", password:""})


interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

// it is a generic Class 
class Sellable<T> {
    public cart: T[] = []
    
    addToCart(products: T) {
        this.cart.push(products)
    }

}

