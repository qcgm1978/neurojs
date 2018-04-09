import * as assert from 'assert';
import { expect } from 'chai';
const window = {}
// import { boot } from '../examples/cars/src/index'
import * as p2 from 'p2'
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
describe(`https://github.com/schteppe/p2.js`, () => {
    describe(`The following example uses the World, Circle, Body and Plane classes to set up a simple physics scene with a ball on a plane.`, () => {
        it(`Create a physics world, where bodies and constraints live`, () => {
            const world = new p2.World({
                gravity: [0, -9.82]
            });
            expect(world).to.be.an('object')
        });
    })
});