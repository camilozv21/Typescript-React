import { Mappable } from './CustomMap';
import { faker } from "@faker-js/faker"

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'red';
    
    constructor() {
        this.name = faker.person.firstName();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }; 
    };

    markerContent(): string {
        return `User Name:<h2> ${this.name}</h2>`
    };
}