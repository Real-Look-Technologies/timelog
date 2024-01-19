const RequisicaoIncorreta = require('./RequisicaoIncorreta.js');

class ErroValidacao extends RequisicaoIncorreta{
    constructor(erro){
        const mensagensErro = Object.values(erro.erros).map(erro => erro.message).join("; ");
        super(`Os seguintes erros foram encontrados: ${mensagensErro}`)
    };
};

module.exports = ErroValidacao;
