# ml-perceptron
Training and fitting models with Rosenblatt's perceptron rule


## General idea
![General concept of perceptron](http://cdn.vicigo.com/img/2/640x640/X4Vs8rpZNWa9HT5Sq3bFXEvrJ189QipYPNisjeUiCckImHQ3D2.jpg)

The preceding figure illustrates how the perceptron receives the inputs of a sample and combines them with the weights to compute the net input. The net input is then passed on to the activation function (here: the unit step function), which generates a binary output 0 or +1 — the predicted class label of the sample. During the learning phase, this output is used to calculate the error of the prediction and update the weights.

```
p.train([
    [ 1, 1, 0 ],
    [ 1, 1, 0 ],
    [ 0, 1, 0 ]
], [
    1, 1, 0
]);

p.predict([ 1, 1, 1 ]);
// 1

p.predict([ 0, 0, 0 ]);
// 0
```

You can also set a custom activation function, example: sigmoid function:
```
p.setActivationFn(value => {
    const exp = Math.pow(2.71828, -1 * value);
    const y = 1 / (1 + exp);

    return y;
)}
```