"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = require("./db/connection");
const user_model_1 = __importDefault(require("./db/models/user.model"));
const app = (0, express_1.default)();
const port = 3000;
(0, connection_1.dpconnection)();
app.use(express_1.default.json());
app.post('/adduser', async (req, res) => {
    let adduser = await user_model_1.default.insertMany(req.body);
    res.json({ message: "user added", adduser });
});
app.listen(port, () => console.log(`server is run ${port}`));
