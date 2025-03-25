function validateData(req, res, next) {
    const { nome, email } = req.body;
    
    // Validação do campo "nome"
    if (!nome || typeof nome !== 'string' || nome.trim().length === 0) {
        return res.status(400).json({ error: 'O campo "nome" é obrigatório e deve ser uma string válida.' });
    }

    // Validação do campo "email"
    if (!email || typeof email !== 'string' || email.trim().length === 0) {
        return res.status(400).json({ error: 'O campo "email" é obrigatório e deve ser uma string válida.' });
    }

    next();
}

module.exports = validateData;