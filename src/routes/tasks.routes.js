
const { Router } = require('express');
const taskController = require('../controllers/tasks.controller');
const validateData = require('../middlewares/validatorMiddleware');
const auth = require('../middlewares/authMiddleware');
const error = require('../middlewares/errorMiddleware');

const taskRouter = Router();

taskRouter.get('/', taskController.getAllTasks);

taskRouter.get('/welcome', taskController.welcome);
taskRouter.get('/welcome/:nome', taskController.welcomeNome);
taskRouter.get('/cadastro', taskController.mostrarCadastro);
taskRouter.post('/cadastro', validateData, taskController.cadastrar);

module.exports = taskRouter;