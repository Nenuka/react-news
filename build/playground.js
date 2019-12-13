


class Car{
        constructor(){
            this.wheels = 4;
            this.type = 'Convertible'
        } 
    }

class Mercedes extends Car {
    constructor(){
        super()
        this.windows = 4;
    }
}
    


const car = new Car();
const mercedes = new Mercedes();

console.log(mercedes.wheels)
