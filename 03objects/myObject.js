"use strict";
// const User = {
//     name: "Aakarshit",
//     email: "a@a.com", 
//     isActive: true,
//     isPaid: true,
// }
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "12345",
    name: "Aakarshit",
    email: "a@a.com",
    isActive: false,
};
//! Can't do this.
//! myUser._id = "12345";

//? Can do this
myUser.email = "b@b.com";
