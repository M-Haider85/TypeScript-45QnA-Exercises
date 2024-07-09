let current_Users:string[]=["Wahaj","hamza","ahsan","Haider","abid"]
let new_Users:string[]=["HAMZA","Ali","Abdullah","haider","Raheel"]

for (let i = 0; i < new_Users.length; i++) {
    const lowerCaseNew_User = new_Users[i].toLowerCase();
    let isUserTaken = false;

    for (let a = 0; a < current_Users.length; a++) {
        if (current_Users[a].toLowerCase() === lowerCaseNew_User) {
            isUserTaken = true;
            break;
        }
    }

    if (isUserTaken) {
        console.log(`The username "${new_Users[i]}" is already taken. Please enter a new username.`);
    } else {
        console.log(`The username "${new_Users[i]}" is available.`);
    }
}
