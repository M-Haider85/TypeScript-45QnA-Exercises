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
  