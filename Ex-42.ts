let magicians: string[] = ["Asif Ali Zardari","Nawaz Sharif","Asim Muneer"];

// Function to modify the array of magicians
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

// Function to print each magician's name
function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// Modify the array and then show the magicians
make_great(magicians);
show_magicians(magicians);
