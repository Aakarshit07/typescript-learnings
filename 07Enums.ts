// Strict user's choice to certain values

// so its Difficult to do like this 
// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

// Thats why we use Enums
enum SeatChoice {
    AISLE = "aisle", 
    MIDDLE = 1,
    WINDOW, 
    FOURTH = 0,
}

const mySeat1 = SeatChoice.AISLE;

// Above code converted into javascript  as IIFE

//? so we put const before the enum
const enum SeatChoice1 {
    AISLE = "aisle", 
    MIDDLE = 1,
    WINDOW, 
    FOURTH = 0,
}

