'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.apiRouter = void 0;
const todo_1 = require('./todo');
const express_1 = __importDefault(require('express'));
const apiRouter = express_1.default.Router();
exports.apiRouter = apiRouter;
apiRouter.use('/todo', todo_1.todoRouter);
