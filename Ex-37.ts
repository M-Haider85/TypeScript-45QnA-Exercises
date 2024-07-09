function make_shirt(size: string = 'large', message: string = 'I love TypeScript') {
    console.log(`The shirt size is "${size}" and it has the message: "${message}" printed on it.`);
}


// Create a medium shirt with the default message
make_shirt('medium');


// Create a large shirt with the default message
make_shirt();


// Create a small shirt with a custom message
make_shirt('XL', 'Never Give Up!');
