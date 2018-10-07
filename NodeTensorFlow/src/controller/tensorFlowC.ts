import * as tf from '@tensorflow/tfjs';

import '@tensorflow/tfjs-node-gpu';

export const flow = (req, res, next) => {
    const model = tf.sequential();
    //model.add(hidden); // add the layer
    model.add(tf.layers.dense({units: 2, inputShape: [1]}));
    model.add(tf.layers.dense({units: 1}));

// Prepare the model for training: Specify the loss and the optimizer.
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Generate some synthetic data for training.
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([2, 4, 6, 8], [4, 1]);

// Train the model using the data.
    const configF = {
        shuffle: true,
        epochs: 500,
        callbacks: {
            onEpochEnd: async (epoch, log) => {
                console.log(`Epoch ${epoch}: loss = ${log.loss}`);
                console.log(model.predict(tf.tensor2d([33], [1, 1])).toString());
            }
        }
    };

    model.fit(xs, ys, configF);

    res.send('done');
};
