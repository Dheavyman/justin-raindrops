import 'mocha'
import chai from 'chai';
import rainDrops from '../source/index.js';

const assert = chai.assert;

describe('Raindrops', () => {
    describe('For valid inputs', () => {
        it('should output "Plong" for number 28', () => {
            assert.deepEqual(rainDrops(28),'Plong');
        });
        it('should output "PlingPlang" for number 1755', () => {
            assert.deepEqual(rainDrops(1755), 'PlingPlang');
        });
        it('should output 34 for number 34', () => {
            assert.deepEqual(rainDrops(34), 34);
        });
        it('should output "Pling" for number 3', () => {
            assert.deepEqual(rainDrops(3), 'Pling');
        });
        it('should output "Pling" for number 6', () => {
            assert.deepEqual(rainDrops(6), 'Pling');
        });
        it('should output "Plang" for number 5', () => {
            assert.deepEqual(rainDrops(5), 'Plang');
        });
        it('should output "Plang" for number 10', () => {
            assert.deepEqual(rainDrops(10), 'Plang');
        });
        it('should output "Plong" for number 7', () => {
            assert.deepEqual(rainDrops(7), 'Plong');
        });
        it('should output "Plong" for number 14', () => {
            assert.deepEqual(rainDrops(14), 'Plong');
        });
        it('should output "PlangPlong" for number 21', () => {
            assert.deepEqual(rainDrops(21), 'PlingPlong');
        });
        it('should output -2 for number -2', () => {
            assert.deepEqual(rainDrops(-2), -2);
        });
        it('should output 22 for number 22', () => {
            assert.deepEqual(rainDrops(22), 22);
        });
    })
    describe('For invalid inputs', () => {
        it('should output "Invalid input" for a string "number"', () => {
            assert.deepEqual(rainDrops('number'),'Invalid input');
        });
        it('should output "Invalid input" for an array "[]"', () => {
            assert.deepEqual(rainDrops([]), 'Invalid input');
        });
        it('should output Invalid input for an object "{}"', () => {
            assert.deepEqual(rainDrops({}), 'Invalid input');
        });
    })
})