"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const banana = require("../controller/bananaC");
const tensorFlow = require("../controller/tensorFlowC");
exports.routes = (app) => {
    app.route('')
        .get(tensorFlow.flow);
    // Add api's for /banana route
    app.route('/banana')
        .get(banana.getBananas)
        .post(banana.addBanana);
    // Add api's for /banana/:ID route
    app.route('/banana/:id')
        .get(banana.getBanana)
        .delete(banana.deleteBanana);
};
//# sourceMappingURL=routes.js.map