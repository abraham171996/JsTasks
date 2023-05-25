class Vehicle{
    constructor(fuel , wheelCount, landOrAir){
        this.fuel = fuel
        this.wheelCount = wheelCount
        this.landOrAir = landOrAir
    }
}

class Car extends Vehicle{
    constructor(model, country,fuel , wheelCount, landOrAir){
        super(fuel , wheelCount, landOrAir)
        this.model = model
        this.country = country
    }
}

class Plane extends Car{
    constructor(model, country,fuel , wheelCount, landOrAir){
        super(model, country,fuel , wheelCount, landOrAir)
    }
}

const test = new Car("Mercedes","Germany","Diesel",4,"Land")
const test2 = new Plane("PH2361","Usa","Gasoline",3,"Land")
console.log(test);
console.log(test2);