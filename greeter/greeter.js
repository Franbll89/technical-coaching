'use strict';

class Greeter {

    constructor(dateTime= new Date()) {
        this.dateTime = dateTime;
    }

    greet(name) {
        const formattedName = this.formatName(name);

        if (this.dateTime.getHours() >= 6 && this.dateTime.getHours() < 12) {
            return `Good morning ${formattedName}`;
        } else {
            return `Hello ${formattedName}`;
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
