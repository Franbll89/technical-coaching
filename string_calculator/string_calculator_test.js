'use strict';

const StringCalculator = require('./string_calculator.js')

test('empty string sums up to 0', () => {
    expect(new StringCalculator().add('')).toBe(0);
});

test('A single number returns the value', () => {
    expect(new StringCalculator().add('1')).toBe(1);
    expect(new StringCalculator().add('2')).toBe(2);
});

test('Two numbers, comma delimited, returns the sum', () =>{
    expect(new StringCalculator().add('1,2')).toBe(3);
    expect(new StringCalculator().add('10,20')).toBe(30);
});

test('Three numbers, comma delimited, returns the sum', () =>{
    expect(new StringCalculator().add('1,2,3')).toBe(6);
});
