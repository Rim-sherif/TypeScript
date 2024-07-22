"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dpconnection = dpconnection;
const mongoose_1 = __importDefault(require("mongoose"));
function dpconnection() {
    mongoose_1.default.connect('mongodb://localhost:27017/typescript').then(() => {
        console.log('connectd to db');
    }).catch((err) => {
        console.log("error");
    });
}
