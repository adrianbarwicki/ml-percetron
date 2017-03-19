const Perceptron = require('./perceptron.js')

const p = new Perceptron();

/**
 * Set of features:
 * height: >1.70 = 1, otherwise 0
 * eye color blue = 1, green = 0
 * 
 * Output:
 * Man 1,
 * Woman 0
 * 
 * Training data assuming that man is has always more 1.7m and eye color does not matter
 * man = [1, 1], [1, 0]
 * Woman: [0, 0], [0, 1]
 */
p.train([
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 0],
    [0, 0],
    [0, 1],
    [0, 0],
    [0, 1],
    [0, 0],
], [
    1, 1, 1, 1, 1,
    0, 0, 0, 0, 0
]);

console.log(p.predict([1, 1]) === 1);
console.log(p.predict([0, 0]) === 0);
console.log(p.predict([1, 0]) === 1);
console.log(p.predict([0, 1]) === 0) ;