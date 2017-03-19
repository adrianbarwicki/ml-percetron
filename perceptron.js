"use strict";

const la = require('linear-algebra')();

class Perceptron {
    constructor() {
        this.sampleDim = 0;

        // Learning rate (between 0 and 1)
        this.learningRate = 0.01;

        // Number of iteration for data fitting
        this.iterationNo = 100;

        // Weights after fitting. 1-d array
        this.weights = [];

        //  Number of misclassifications in every epoch.
        this.errors = [];

        // we use a sigmoid function
        // @todo: is sigmoid function the right choice for the default activation rule?
        this.activationRule = value => {
            return value > 0 ? 1 : 0;
            /*
            const exp = Math.pow(2.71828, -1 * value);
            const y = 1 / (1 + exp);

            return y;
            */
        };
    }

    // Private
    _getOutput(Xrow) {
        const output = Xrow.reduce( (total, currentValue, currentIndex) => {
            return total + this.weights.data[0][currentIndex] * currentValue;
        }, 0);

        return output;
    }

    _getNewWeight(prediction, trueValue, arg) {
        return this.learningRate * (trueValue - prediction) * arg;
    }

    // Public
    setActivationFn(fn) {
        this.acticationRule = fn;
    }

    predict(Xrow) {
        return this.activationRule(this._getOutput(Xrow));
    }

    train (X, y) {
        if (!this.weights.length) {
            this.sampleDim = X.length;
            this.weights = la.Matrix.zero(1, this.sampleDim);
        }

        const noOfTrainingSets = X.length;
        let currentVector, output, prediction;

        for (let i = 0; i < this.iterationNo; i++){
            for (let j = 0; j < noOfTrainingSets; j++){
                prediction = this.predict(X[j]);

                const newWeights = [];
                const residual = y[j] - prediction;

                this.weights.data[0].forEach((weight, index) => {
                    newWeights.push(
                        weight + this.learningRate * residual * X[j][index]
                    );
                });

                this.weights = new la.Matrix(newWeights);
            }
        }
    }
}

module.exports = Perceptron;