// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

let guest: string[] = ["Ans", "Adil", "Asad", "Kaif", "Zahid", "Sarmad"];

// for(let i = 0; i < guest.length; i++) {
//     console.log(`Hello ${guest[i]}! Tommorow, you are inivited me`);
// }

guest.map((items) => {console.log(`Hello ${items}! Tommorow, you are inivited me`);})