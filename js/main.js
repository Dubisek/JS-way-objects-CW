// const aurora = {
//   name: "Aurora",
//   health: 150,
//   strength: 25,
//   XP: 0,


//   // Return the character description
//   describe() {
//     return `${this.name} has ${this.health} health points and ${this
//       .strength} as strength, her XP is ${this.XP}`;
//   }
// };


// // aurora is shot by an arrow
// aurora.health -= 20

// console.log(aurora.describe());







// const dog = {
//     name: 'Yuumicorn',
//     species: 'cat',
//     size: '20 cm',

//     bark() {
//         return "meow, meow, meow!"
//     }
// }


// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);



// const r = Number(prompt("Enter the circle radius:"));

// // TODO: create the circle object here

// const circle = {
//     circumference: r*2*3.14159,
//     area:  r*r*3.14159
// }



// console.log(`Its circumference is ${circle.circumference}`);
// console.log(`Its area is ${circle.area}`);


// const account = {
//     name: 'Alex',
//     balance: 0,



//     credit(number) {
//         this.balance += number
//     },

//     describe() {
//         console.log(`Owner is ${this.name}, account balance is ${this.balance}`)
//     }



// }


// account.credit(250)
// account.credit(-80)


// Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.


// // Sum Numbers
// function sum (numbers) {
//     let summ = 0
//     numbers.forEach(ele => summ += ele)
//     return summ
    
// };