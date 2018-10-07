import * as banana from "../controller/bananaC";
import * as tensorFlow from "../controller/tensorFlowC";

export const routes = (app) => {
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

