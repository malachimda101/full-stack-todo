'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require('express'));
const todo_1 = require('../controllers/todo');
const todoRouter = express_1.default.Router();
exports.todoRouter = todoRouter;
todoRouter.get('/', todo_1.getTodos);
