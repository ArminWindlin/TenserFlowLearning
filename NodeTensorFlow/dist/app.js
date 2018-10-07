"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./routes/routes");
const error_1 = require("./util/error");
//import * as oauth from './controller/oauthC'; // oauth
class App {
    constructor() {
        this.app = express();
        this.database();
        this.config();
        this.routes();
        this.errors();
    }
    // Setup database connection
    database() {
        mongoose.connect(process.env.VCAP_SERVICES ?
            JSON.parse(process.env.VCAP_SERVICES).mongodbent[0].credentials.uri :
            'mongodb://localhost/NeuralNetwork');
    }
    // Middleware
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    // Bind routes
    routes() {
        route.routes(this.app);
    }
    //error handling
    errors() {
        this.app.use(error_1.handleError);
    }
}
// Export app to import in server.ts
exports.default = new App().app;
//# sourceMappingURL=app.js.map