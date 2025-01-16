const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2015,
    color: 'red',
    price: 10000
};

console.log(car.make);

for (const key in car) {
    console.log(key);
}   