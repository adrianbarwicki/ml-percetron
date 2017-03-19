const Perceptron = require('./perceptron.js')

const p = new Perceptron();

p.train([
    [ 1, 1, 0 ],
    [ 1, 1, 0 ],
    [ 0, 1, 0 ],
    [ 0, 0, 1 ]
], [
    1, 1, 0, 0
]);

console.log(p.predict([ 1, 1, 1 ]));
// 1

console.log(p.predict([ 0, 0, 0 ]));
// 0