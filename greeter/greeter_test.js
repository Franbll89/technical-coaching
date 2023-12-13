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
    const greeter = new Greeter(new Date("2015-03-25 15:00:00"));

    test('greets Pippo by name', () => {
        greetAndExpect("Pippo", "Hello Pippo");
    });

    test('greets Pluto by name', () => {
        greetAndExpect("Pluto", "Hello Pluto");
    });

    test('trims the input when greeting', () => {
        greetAndExpect(" Paperino ", "Hello Paperino");
    })

    test('capitalise name when greeting', () => {
        greetAndExpect(" marisa", "Hello Marisa");
    })

    test('can capitalise string with no leading spaces', () => {
        const capitalised = greeter.capitalise("marisa");

        expect(capitalised).toEqual("Marisa")
    })

    test('can capitalise string of length 1', () => {
        const capitalised = greeter.capitalise("f");

        expect(capitalised).toEqual("F")
    })

    test('uses "good morning" at 9', () => {
        const greeter = new Greeter(new Date("2015-03-25 09:00:00"));

        const greeting = greeter.greet("Fausto");

        expect(greeting).toEqual("Good morning Fausto");
    })


    test('uses "good morning" at 11:30', () => {
        const greeter = new Greeter(new Date("2015-03-25 11:30:00"));

        const greeting = greeter.greet("Fausto");

        expect(greeting).toEqual("Good morning Fausto");
    })

    test('uses "hello" at 12:45', () => {
        const greeter = new Greeter(new Date("2015-03-25 12:45:00"));

        const greeting = greeter.greet("Pallavi");

        expect(greeting).toEqual("Hello Pallavi");
    })

    function greetAndExpect(name, expectedGreeting) {
        const greeting = greeter.greet(name);

        expect(greeting).toBe(expectedGreeting);
    }
})


