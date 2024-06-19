

// class Expect {
//     constructor(val) {
//         this.val = val;
//     }

//     toBe(num) {
//         return this.val === num;
//     };
// }


// let result1 = new Expect(1+1).toBe(2);
// let result2 = new Expect(1+1).toBe(5);
// console.log(result1) // true;
// console.log(result2) // false;


// function expect(original) {
//     return {
//         toBe: function (given) {
//             return original===given;
//         }
//     }
// }

// console.log(expect(1+1).toBe(2));