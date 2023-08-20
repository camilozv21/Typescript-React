const carMaker = ['fort', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsNtMake: string[][] = [];

// help with inference when extracting values
const car = carMaker[0];
const myCar = carMaker.pop();

// Prevent incompatible values
carMaker.push(100);

// Help with map
carMaker.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2019-10-10');
importantDates.push(new Date());

