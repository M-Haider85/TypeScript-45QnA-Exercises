let guestList:string[]=['Bilal','Uzair','Taha','Mugheerah','Ali']
for(let i=0;i<guestList.length;i++){
    console.log(`Hello ${guestList[i]}, I would like to invite you for dinner.`);  
}


// Update: one guest can't make it, so we'll remove and replace them
const guestUnableToAttend = 'Mugheerah';
const newGuest = 'Ibrahim';

// Find the index of the guest who can't make it
const index = guestList.indexOf(guestUnableToAttend);

// Replace the guest if they are in the list
if (index !== -1) {
    console.log(`\n${guestList[index]} can't make it to the dinner.`);
    guestList[index] = newGuest;
}

// Print new invitations
console.log("\nNew Invitations:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello ${guestList[i]}, I would like to invite you for dinner.`);
}
