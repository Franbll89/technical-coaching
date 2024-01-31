'use strict';

class Greeter {

    constructor(dateTimeSupplier = () => new Date()) {
        this.dateTimeSupplier = dateTimeSupplier;
    }

    greet(name) {
        return `${this.calculateGreetingBasedOnTime()} ${this.formatName(name)}`;
    }

    calculateGreetingBasedOnTime() {
        const hours = this.dateTimeSupplier().getHours();
        if (hours >= 6 && hours < 12) {
            return `Good morning`;
        } else if (hours >= 18 && hours < 22) {
            return `Good evening`;
        } else if (hours >= 22 || hours < 6) {
            return `Good night`
        } else {
            return `Hello`
        }
    }

    formatName(name) {
        return this.capitalise(name.trim());
    }

    capitalise(name) {
        const firstLetter = name.substring(0, 1).toUpperCase();
        const remainder = name.substring(1);
        return firstLetter + remainder;
    }

}

module.exports = Greeter;
