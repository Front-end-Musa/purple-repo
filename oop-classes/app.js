class Car {
    #brand;
    #model;
    #_mileage;

    constructor(brand, model, mileage) {
        this.#brand = brand;
        this.#model = model;
        this.#mileage = mileage;
    }

    set #mileage(km) {
        this.#_mileage = Number(km);
    }

    get #mileage() {
        return this.#mileage;
    }

    info() {
        return this.#brand, this.#model, this.#_mileage;
    }
}