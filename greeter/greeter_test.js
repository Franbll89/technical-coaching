'use strict';

const Greeter = require('./greeter.js')

/*
1. Write a `Greeter` class with `greet` instance method. Initially, the method receives a `name` as input and outputs `Hello <name>`.
2. `greet` trims the input
3. `greet` capitalizes the first letter of the name
4. `greet` returns `Good morning <name>` when the time is 06:00-12:00
5. `greet` returns `Good evening <name>` when the time is 18:00-22:00
6. `greet` returns `Good night <name>` when the time is 22:00-06:00
7. `greet` logs on console every time it is run
*/

describe('Greeter', () => {
    const greeter = new Greeter();

    test('greets Pippo by name', () => {
        greetAndExpect("Pippo", "Hello Pippo");
    });

    test('greets Pluto by name', () => {
        greetAndExpect("Pluto", "Hello Pluto")
    });


    function greetAndExpect(name, expectedGreeting) {
        const greeting = greeter.greet(name);

        expect(greeting).toBe(expectedGreeting);
    }
})


