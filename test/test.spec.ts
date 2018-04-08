import * as assert from 'assert';
import { expect } from 'chai';
const window = {}
import { boot } from '../examples/cars/src/index'
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
    it(`expect() style assertions`, () => {
        expect(1).to.be.within(0, Infinity);
    });
});
describe(`cars`, () => {
    describe(`gcd`, () => {
        it(`gcd`, () => {
            expect(boot).to.be.an()
        });
    })
});