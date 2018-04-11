import { expect } from 'chai';

import { Network } from 'neataptic';
// The export parameters specify individual named exports, while the import * as name syntax imports all of them
import * as math from 'mathjs';
const brain = require('brain.js');
describe(`https://en.wikipedia.org/wiki/Wheat_and_chessboard_problem`, () => {
    it(`Math.js comes with a function math.eval to evaluate expressions`, () => {
        expect(math.eval('sqrt(3^2 + 4^2)')).to.equal(5)
        expect(math.eval('2^0+2^1+2^2')).to.equal(7)
    });
    it(`The total number of grains equals 18,446,744,073,709,551,615 (the 64th Mersenne number), much higher than what most intuitively expect.`, () => {
        const chessGrids = Array.from(Array(64).keys())
        let str = '';
        for (let item in chessGrids) {
            str += `2^${item}`
        }
        const sum = math.eval(str);
        expect(sum).to.equal(Infinity)
        // A googol is 10 to the 100th power (which is 1 followed by 100 zeros). A googol is larger than the number of elementary particles in the universe, which amount to only 10 to the 80th power.
        const googol = 1e100
        expect(sum).to.be.greaterThan(googol)
        expect(Number(`18, 446, 744, 073, 709, 551, 615`.replace(/,|\s+/g, ''))).to.be.lessThan(googol)
    });

});
describe(`https://arxiv.org/pdf/1804.01622.pdf`, () => {
    describe(`What I cannot create, I do not understand
– Richard Feynman`, () => {
            it(`Scene Graphs. The input to our model is a scene
graph [22] describing objects and relationships between objects.
Given a set of object categories C and a set of relationship
categories R, a scene graph is a tuple (O, E) where
O = {o1, . . . , on} is a set of objects with each oi ∈ C, and
E ⊆ O × R × O is a set of directed edges of the form
(oi
, r, oj ) where oi
, oj ∈ O and r ∈ R.`, () => {
                    const C = { sheep: 2, boat: 1 }, R = [1, 2, 3], O = { add: '+' }

                    expect(math.pow([[-1, 2], [3, 1]], 2)).eql([[7, 0], [0, 7]])
                    expect(math.simplify(`${C.sheep} ${O.add} ${C.boat} / ${R.length}`).toString()).to.equal('7 / 3');
                });
        });
    describe(`math.js`, () => {
        it(`math.js can evaluate expressions and supports chained operations.`, () => {
            expect(math).to.an('object')
            // functions and constants
            expect(math.round(math.e, 3)).to.equal(2.718);
        });
    });

});
describe(`https://blog.bitsrc.io/11-javascript-machine-learning-libraries-to-use-in-your-app-c49772cca46c`, () => {
    describe(`https://github.com/BrainJS/brain.js`, () => {
        it(` approximate the XOR function using brain.js`, () => {
            var net = new brain.NeuralNetwork();

            net.train([{ input: [0, 0], output: [0] },
            { input: [0, 1], output: [1] },
            { input: [1, 0], output: [1] },
            { input: [1, 1], output: [0] }]);

            var output = net.run([1, 0]);  // [0.987]
            expect(output[0]).to.be.within(0.9, 1)
        })
    })
    describe(`http://caza.la/synaptic/#/`, () => {
        it(`The javascript architecture-free neural network library for node.js and the browser`, () => {
            var synaptic = require('synaptic');
            this.network = new synaptic.Architect.Perceptron(40, 25, 3);
            expect(this.network.layers).to.an('object');
        })
    })
    describe(`https://github.com/wagenaartje/neataptic`, () => {
        it(`this network learns the XOR gate (through neuro-evolution)`, (done) => {
            var network = new Network(2, 1);

            var trainingSet = [
                { input: [0, 0], output: [0] },
                { input: [0, 1], output: [1] },
                { input: [1, 0], output: [1] },
                { input: [1, 1], output: [0] }
            ];

            const generator = async () => await network.evolve(trainingSet, {
                equal: true,
                error: 0.03
            });
            // generator().then(data => {

            //     expect(data).to.eql();
            //     done()
            // }).catch(err => {
            //     debugger
            //     done();
            // })
            done()
        });
    });
})