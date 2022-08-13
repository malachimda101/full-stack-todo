'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const path_1 = __importDefault(require('path'));
const routes_1 = require('./src/routes');
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../../client/build')));
app.use('/api', routes_1.apiRouter);
app.get('*', (req, res) => {
  res.sendFile(path_1.default.join(__dirname, '../../client/build', 'index.html'));
});
app.listen(8000, () => {
  console.log(`⚡️[server]: Server running at https://localhost:${8000}`);
});
