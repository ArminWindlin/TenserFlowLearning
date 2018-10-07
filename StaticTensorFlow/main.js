test2();

function test() {
    const values = [];
    for (let i = 0; i < 32; i++) {
        values[i] = Math.random() * 100;
    }
    const shape = [2, 4, 4];
    const data = tf.tensor3d(values, shape, 'int32');
    data.print();

    // model
    const model = tf.sequential();

    // create hidden layer
    const hidden = tf.layers.dense({
        units: 4,
        inputShape: [1],
        activation: 'sigmoid'
    });
    //model.add(hidden); // add the layer

    // create output layer
    const output = tf.layers.dense({
        units: 1,
        inputShape: [1],
        activation: 'sigmoid' // use 'softmax' > output array will add up to 1
    });
    model.add(output);

    // optimizer
    const sgdOpt = tf.train.sgd(0.1);
    // compile model
    const config = {
        optimizer: sgdOpt,
        loss: tf.losses.meanSquaredError // 'cetegoricalCrossEntropy
    };
    model.compile(config);

    const xs = tf.tensor(
        [2, 4, 6], [3, 1]);

    const ys = tf.tensor(
        [1, 2, 3], [3, 1]);

    const configF = {
        shuffle: true,
        epochs: 10
    };

    hey().then(() => {
        console.log('done');
        let outputs = model.predict(xs);
        outputs.print();
    });

    async function hey() {
        for (let i = 0; i < 20; i++) {
            const response = await model.fit(xs, ys, configF);
            console.log(response.history.loss[0]);
        }
    }
}

function test2() {
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
        epochs: 500
    };

    hey().then(() => {
        console.log('done');
    });

    async function hey() {
        for (let i = 0; i < 1; i++) {
            const response = await model.fit(xs, ys, configF);
            console.log(response.history.loss[0]);
            model.predict(tf.tensor2d([33], [1, 1])).print();
        }
    }
}