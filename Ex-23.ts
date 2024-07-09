let car = 'subaru';

// Test 1: Is car equal to 'subaru'? I predict True.
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// Test 2: Is car not equal to 'toyota'? I predict True.
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

// Test 3: Is car equal to 'Subaru' (case-sensitive)? I predict False.
console.log("Is car == 'Subaru'? I predict False.");
console.log(car == 'Subaru');

// Test 4: Is car not equal to 'Subaru' (case-sensitive)? I predict True.
console.log("Is car != 'Subaru'? I predict True.");
console.log(car != 'Subaru');

// Test 5: Is car equal to 'subaru' OR 'toyota'? I predict True.
console.log("Is car == 'subaru' || car == 'toyota'? I predict True.");
console.log(car == 'subaru' || car == 'toyota');

// Test 6: Is car equal to 'subaru' AND 'toyota'? I predict False.
console.log("Is car == 'subaru' && car == 'toyota'? I predict False.");
console.log(car == 'subaru' && car > 'toyota');

// Test 7: Is car length greater than 5? I predict False.
console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);

// Test 8: Is car length less than or equal to 7? I predict True.
console.log("Is car.length <= 7? I predict True.");
console.log(car.length <= 7);

// Test 9: Is car undefined? I predict False.
console.log("Is car === undefined? I predict False.");
console.log(car === undefined);

// Test 10: Is car null? I predict False.
console.log("Is car === null? I predict False.");
console.log(car === null);
