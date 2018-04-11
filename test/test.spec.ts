import * as assert from 'assert';
import { expect } from 'chai';
const window = {}
// import { boot } from '../examples/cars/src/index'
import * as p2 from 'p2'
import * as PCA from 'ml-pca'
import { getNumbers } from 'ml-dataset-iris'
import * as Mind from 'node-mind';
// import * as natural from 'natural';
// var natural = require('natural');

describe(`https://github.com/NaturalNode/natural`, () => {
    describe(`Tokenizers`, () => {
        it(`Word, Regexp, and Treebank tokenizers are provided for breaking text up into arrays of tokens`, () => {
            // var tokenizer = new natural.WordTokenizer();
            // console.log(tokenizer.tokenize("your dog has fleas."));
            // [ 'your', 'dog', 'has', 'fleas' ]
        });
    });
});
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
describe(`https://github.com/mljs/pca`, () => {
    it(`Principal component analysis (PCA)`, () => {

        const dataset = getNumbers();
        // dataset is a two-dimensional array where rows represent the samples and columns the features
        const pca = new PCA(dataset);
        const arr = pca.getExplainedVariance();
        expect(arr).to.be.an('Array');
        expect(arr).to.eql([0.9246187232017269,
            0.05306648311706785,
            0.017102609807929704,
            0.005212183873275558])
        const newPoints = [[4.9, 3.2, 1.2, 0.4], [5.4, 3.3, 1.4, 0.9]];
        const predict = pca.predict(newPoints);
        expect(predict).to.be.an('Array'); // project new points into the PCA space
        expect(predict).to.eql([
            [-2.830722471866897,
                0.01139060953209596,
                0.0030369648815961603,
            -0.2817812120420965],
            [-2.308002707614927,
            -0.3175048770719249,
                0.059976053412802766,
            -0.688413413360567]])
    });
});
describe(`https://github.com/qcgm1978/mind`, () => {
    describe(`A flexible neural network library for Node.js and the browser. Check out a live demo of a movie recommendation engine built with Mind.`, () => {
        describe(`Usage`, () => {
            beforeAll: {
                // this.a = character(
                //     '.#####.' +
                //     '#.....#' +
                //     '#.....#' +
                //     '#######' +
                //     '#.....#' +
                //     '#.....#' +
                //     '#.....#'
                // )

                // this.b = character(
                //     '######.' +
                //     '#.....#' +
                //     '#.....#' +
                //     '######.' +
                //     '#.....#' +
                //     '#.....#' +
                //     '######.'
                // )

                // this.c = character(
                //     '#######' +
                //     '#......' +
                //     '#......' +
                //     '#......' +
                //     '#......' +
                //     '#......' +
                //     '#######'
                // )
            };
            it(`Letters.
             *
             * - Imagine these # and . represent black and white pixels.`, () => {


                    expect(this.a).to.eql()
                });




            /**
             * Learn the letters A through C.
             */

            // const mind = new Mind({ activator: 'sigmoid' })
            //     .learn([
            //         { input: this.a, output: map('a') },
            //         { input: this.b, output: map('b') },
            //         { input: this.c, output: map('c') }
            //     ])

            // /**
            //  * Predict the letter C, even with a pixel off.
            //  */

            // const result = mind.predict(character(
            //     '#######' +
            //     '#......' +
            //     '#......' +
            //     '#......' +
            //     '#......' +
            //     '##.....' +
            //     '#######'
            // ))

            // console.log(result) // ~ 0.5

            // /**
            //  * Turn the # into 1s and . into 0s.
            //  */

            // function character(string) {
            //     return string
            //         .trim()
            //         .split('')
            //         .map(integer)

            //     function integer(symbol) {
            //         if ('#' === symbol) return 1
            //         if ('.' === symbol) return 0
            //     }
            // }

            // /**
            //  * Map letter to a number.
            //  */

            // function map(letter) {
            //     if (letter === 'a') return [0.1]
            //     if (letter === 'b') return [0.3]
            //     if (letter === 'c') return [0.5]
            //     return 0
            // }
        });
    });
});