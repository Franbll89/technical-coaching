'use strict';

class Greeter {

    greet(name) {
        return `Hello ${this.formatName(name)}`;
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
