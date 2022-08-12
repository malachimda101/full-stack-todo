"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
console.log(path_1.default.resolve(__dirname, '/client/build'));
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../../client/build')));
app.get("/api", (req, res) => {
    console.log("seneding data");
    res.json({ message: "Hello from server!" });
});
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../client/build', 'index.html'));
});
app.listen(8000, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${8000}`);
});
