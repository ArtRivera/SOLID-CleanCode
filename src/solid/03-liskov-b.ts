export interface Car {
    getNumberOfSeats: () => number
}

export class Tesla implements Car {

    constructor( private numberOfSeats: number ) {}

    getNumberOfSeats(){
        return this.numberOfSeats
    }
}

export class Audi implements Car {

    constructor( private numberOfSeats: number ) {}

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota implements Car {

    constructor( private numberOfSeats: number ) {}

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda implements Car {

    constructor( private numberOfSeats: number ) {}

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}
