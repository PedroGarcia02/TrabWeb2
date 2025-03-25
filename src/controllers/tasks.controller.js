
// Controllers

const taskDAO = require("../models/tasks.dao");

const taskController = {
    getAllTasks: (req, res) => {
        let filtro = "";
        if(req.query.ordem) {
            filtro = req.query.ordem;
        }
        const allTasks = taskDAO.findAll(filtro);
        res.render('index', { tasks: allTasks });
    },

    welcome: (req, res) => {
        res.send('Bem vindo');
    },

    welcomeNome: (req, res) => {
        let nome = req.params.nome;
        
        res.send('Bem vindo '+nome);
    },

    mostrarCadastro: (req, res) => {
        
        res.render('cadastro');
    },

    cadastrar: (req, res) => {
        const dados = req.body
        taskDAO.criarJSON(dados);

        res.redirect('/');
    },
};

module.exports = taskController;