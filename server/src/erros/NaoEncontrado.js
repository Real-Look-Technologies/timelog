const ErroBase = require('./ErroBase.js');

class NaoEncontrado extends ErroBase{
    constructor(mensagem = "Pagina nao encontrada"){
        super(mensagem, 404);
    };
};

module.exports = NaoEncontrado;