const NaoEncontrado = require('../erros/NaoEncontrado.js');

function manipulador404(req, res, next) {
  const erro404 = new NaoEncontrado();
  next(erro404);
}

module.exports = manipulador404;