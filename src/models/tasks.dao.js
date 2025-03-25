
const Crypto = require('crypto');

const tasks = [{name: 'Alberto'}, {name: 'Pedro'}, {name:'Joaquim'}];

const taskDAO = {
    findAll(filtro) {
        if(filtro == "desc") {
            return tasks.slice().sort((a, b) => b.name.localeCompare(a.name));
        }
        if(filtro == "asc") {
            return tasks.slice().sort((a, b) => a.name.localeCompare(b.name));
        }
        return tasks;
    },

    criarJSON(dados) {
        const id = Crypto.randomUUID();
        dados.id = id;

        console.log(dados)
        return dados;
    }
}

module.exports = taskDAO;