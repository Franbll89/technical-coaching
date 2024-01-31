'use strict';

class StringCalculator {
    add(inputString) {
        if (!inputString) {
            return 0;
        }

        return inputString.split(',')
            .map(s => parseInt(s))
            .reduce((acc, v) => acc + v, 0)
    }
}

module.exports = StringCalculator
