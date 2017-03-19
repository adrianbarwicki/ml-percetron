const la = require('linear-algebra');

class Perceptron {
    constructor() {
        this.sampleDim = 0;

        // Learning rate (between 0 and 1)
        this.learningRate = 0.01;

        // Number of iteration for data fitting
        this.iterationNo = 10;

        // Weights after fitting. 1-d array
        this.weights = [];

        //  Number of misclassifications in every epoch.
        this.errors = [];

        // we use a sigmoid function
        // @todo: is sigmoid function the right choice for the default activation rule?
        this.acticationRule = value => 1 / Math.pow(2,71828, -1 * value);
    }

    // Private
    _getOutput(Xrow) {
        currentVector = new la.Vector(Xrow);

        output = this.weights.trans().dot(currentVector);
    }

    _getNewWeight(prediction, trueValue, arg) {
        return this.learningRate * (trueValue - prediction) * arg;
    }

    // Public
    setActivationFn(fn) {
        this.acticationRule = fn;
    }

    predict(Xrow) {
        return this.activationRule(_getOutput(X[j]));
    }

    train (X, y) {
        if (!this.weights.length) {
            this.weights = new la.Vector(this.sampleDim);
        }

        const noOfTrainingSets = X.length;
        let currentVector, output, prediction;

        for (let i = 0; i < this.iterationNo; i++){
            for (let j = 0; j < noOfTrainingSets; j++){
                output = _getOutput(X[j]);
                prediction = predict(output);

                const newWeights = [];
                const residual = prediction - y[j];

                this.weights.data[0].forEach((weight, index) => {
                    newWeights.push(
                        weight + this.learningRate * residual * X[j][index]
                    );
                });

                this.weights = new la.Vector(newWeights);
            }
        }
    }
} 