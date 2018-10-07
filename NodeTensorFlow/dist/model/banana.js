"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
// Create schema for banana collection
const BananaSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: 'enter the name of the banana'
    },
    color: {
        type: String,
        required: 'enter the color of the banana'
    },
    size: {
        type: Number,
        required: 'enter the size of the banana'
    },
    pick_date: {
        type: Date,
        default: Date.now
    },
    comment: String
});
// Export schema for banana collection
exports.Banana = mongoose.model('bananas', BananaSchema);
//# sourceMappingURL=banana.js.map