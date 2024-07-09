interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; 
}

function make_car(manufacturer: string, model: string, options: { [key: string]: any } = {}): Car {
    return {
        manufacturer,
        model,
        ...options
    };
}


const car1 = make_car('Toyota', 'Corolla', { color: 'Black', year: 2021, sunroof: true });
const car2 = make_car('Mercedes', 'Benz', { color: 'Red', autopilot: true });


console.log(car1);
console.log(car2);
