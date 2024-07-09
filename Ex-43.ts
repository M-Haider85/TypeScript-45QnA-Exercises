let magicians: string[] = ["Asif Ali Zardari","Nawaz Sharif","Asim Muneer"];

// Function to modify a copy of the array of magicians
function make_great(magicians: string[]): string[] {
    const great_magicians = magicians.slice(); // Create a copy of the original array
    for (let i = 0; i < great_magicians.length; i++) {
        great_magicians[i] = `the Great ${great_magicians[i]}`;
    }
    return great_magicians; // Return the modified copy
}

// Function to print each magician's name
function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// Create a modified array and then show both arrays
const great_magicians = make_great(magicians);

console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(great_magicians);
