function city_country(city: string, country: string) {
    return `${city}, ${country}`;
}

// Call the function with three city-country pairs and print the returned values
const cityCountry1 = city_country('Lahore', 'Pakistan');
const cityCountry2 = city_country('Berlin', 'Germany');
const cityCountry3 = city_country('Paris', 'France');

console.log(cityCountry1);
console.log(cityCountry2);
console.log(cityCountry3);
