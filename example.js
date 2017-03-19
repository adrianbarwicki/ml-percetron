const Perceptron = require('./perceptron.js')

const p = new Perceptron();

p.train([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 4, 3, 4],
    [2, 2, 3, 4],
    [4, 2, 3, 1],
    [1, 2, 3, 3]
], [
    1, 1, 1, 0, 0, 1
]);

console.log(p.predict([1, 2, 3, 4]));
console.log(p.predict([1, 4, 3, 1]));
console.log(p.predict([4, 3, 2, 1]));