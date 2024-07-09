const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    const Number = numbers[i];

    let ordinalEnding: string;

    if (Number === 1) {
        ordinalEnding = 'st';
    } 
    else if (Number === 2) {
        ordinalEnding = 'nd';
    } 
    else if (Number === 3) {
        ordinalEnding = 'rd';
    } 
    else {
        ordinalEnding = 'th';
    }

    console.log(`${Number}${ordinalEnding}`);
}
