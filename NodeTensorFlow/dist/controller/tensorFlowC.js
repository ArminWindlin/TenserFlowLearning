"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");
//npm install --global --production windows-build-tools
exports.flow = (req, res, next) => {
    const model = tf.sequential();
    //model.add(hidden); // add the layer
    model.add(tf.layers.dense({ units: 2, inputShape: [1] }));
    model.add(tf.layers.dense({ units: 1 }));
    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
    // Generate some synthetic data for training.
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([2, 4, 6, 8], [4, 1]);
    // Train the model using the data.
    const configF = {
        shuffle: true,
        epochs: 500,
        callbacks: {
            onEpochEnd: (epoch, log) => __awaiter(this, void 0, void 0, function* () {
                console.log(`Epoch ${epoch}: loss = ${log.loss}`);
                console.log(model.predict(tf.tensor2d([33], [1, 1])).toString());
            })
        }
    };
    model.fit(xs, ys, configF);
    res.send('done');
};
//# sourceMappingURL=tensorFlowC.js.map