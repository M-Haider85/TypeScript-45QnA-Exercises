//Q#16 Answer

//Print Initial Invitation
let guestList:string[]=['Bilal','Uzair','Taha','Ibrahim','Ali']
for(let i=0;i<guestList.length;i++){
    console.log(`Hello ${guestList[i]}, I would like to invite you for dinner.`);
    }


// Inform people that you found a bigger dinner table
console.log("\nGreat news! We found a bigger dinner table, so we can invite more guests!");

//Adding new guests
guestList.unshift("Hamza")
guestList.splice(guestList.length/2,0,'Osama')
guestList.push("Ahsan")

//Print a new set of invitation message for each guest.
for(let i=0;i<guestList.length;i++) {
console.log(`Hello ${guestList[i]}, would you like to join me for dinner?`);
}

//Q#17 Answer
console.log('\nUnfortunately, we can only invite two people for dinner.');

// Remove guests one at a time until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print messages to the two remaining guests
console.log("\nYou are still invited to dinner:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are still invited to dinner.`);
}

// Remove the last two names from the list
guestList.pop();
guestList.pop();

// Print the list to confirm it's empty
console.log("\nFinal guest list:", guestList);

  