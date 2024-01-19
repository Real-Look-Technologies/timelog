const { ValidationError, DatabaseError } = require('sequelize');
const ErroBase = require('../erros/ErroBase.js');
const ErroValidacao = require("../erros/ErroValidacao.js") ;
const RequisicaoIncorreta = require( "../erros/RequisicaoIncorreta.js");

function manipuladorDeErros(erro, req, res, next) {
  if (erro instanceof DatabaseError) {
    new RequisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof ValidationError) {
    new ErroValidacao(erro).enviarResposta(res);
  } else if (erro instanceof ErroBase) {
    erro.enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
}

module.exports = manipuladorDeErros;