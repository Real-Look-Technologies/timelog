class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  wrapAsync(fn) {
    return async (req, res, next) => {
      try {
        await fn(req, res);
      } catch (error) {
        if (error.name === "SequelizeValidationError") {
          // Erro de validação do ORM
          const validationErrors = error.errors.map((err) => ({
            field: err.path,
            message: err.message,
          }));
          res.status(400).json({ message: "Validation Error", errors: validationErrors });
        } else {
          // Outro erro inesperado
          console.error(error);
          res.status(500).json({ message: "Internal Server Error" });
        }
      }
    };
  }

  index = this.wrapAsync(async (req, res) => {
    const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
    return res.status(200).json(listaDeRegistro);
  });

  show = this.wrapAsync(async (req, res) => {
    const { id } = req.params;
    const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
    return res.status(200).json(umRegistro);
  });

  create = this.wrapAsync(async (req, res) => {
    const dadosParaCriacao = req.body;
    const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
    if (!novoRegistroCriado) {
      res.status(400).json({ message: "Bad Request: Falha ao criar o registro" });
    } else {
      res.status(200).json(novoRegistroCriado);
    }
  });

  update = this.wrapAsync(async (req, res) => {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
    if (!foiAtualizado) {
      res.status(404).json({ message: `Not Found: Registro com ID ${id} não encontrado` });
    } else {
      res.status(200).json({ message: "Atualizado com sucesso" });
    }
  });

  destroy = this.wrapAsync(async (req, res) => {
    const { id } = req.params;
    const foiExcluido = await this.entidadeService.excluiRegistro(Number(id));
    if (!foiExcluido) {
      res.status(404).json({ message: `Not Found: Registro com ID ${id} não encontrado` });
    } else {
      res.status(200).json({ message: `ID ${id} deletado com sucesso` });
    }
  });
}

module.exports = Controller;