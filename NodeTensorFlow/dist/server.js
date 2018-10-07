"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = 3000;
// Start server on cloud port or local port 3000
app_1.default.listen(process.env.PORT || port, function () {
    console.log('Express server listening on port ' + port);
});
//# sourceMappingURL=server.js.map