"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const banana_1 = require("../model/banana");
// Method to add a single banana to database
exports.addBanana = (req, res, next) => {
    const banana = new banana_1.Banana(req.body);
    banana.save((err, task) => {
        if (err)
            return next(err);
        res.send(banana);
        console.info('Added a banana!');
    });
};
// Method to get all banana from database
exports.getBananas = (req, res, next) => {
    banana_1.Banana.find({}, (err, bananas) => {
        if (err) {
            return next(err);
        }
        res.send(bananas);
        console.info('Sent all bananas!');
    });
};
// Method to get a single banana to database
exports.getBanana = (req, res, next) => {
    banana_1.Banana.findOne({ _id: req.params.id }, (err, banana) => {
        if (err) {
            return next(err);
        }
        res.send(banana);
        console.info('Sent the requested banana!');
    });
};
// Method to delete a single banana to database
exports.deleteBanana = (req, res, next) => {
    banana_1.Banana.remove({ _id: req.params.id }, (err) => {
        if (err) {
            return next(err);
        }
        res.send({ info: "Deleted a banana!" });
        console.info('Deleted a banana!');
    });
};
//# sourceMappingURL=bananaC.js.map