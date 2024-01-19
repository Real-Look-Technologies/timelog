class Controller {
    constructor(entidadeService) {
      this.entidadeService = entidadeService;
    };
  
    async index(req, res) {
      try {
        const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
        return res.status(200).json(listaDeRegistro);
      } catch (erro) {
        // erro
      };
    };
  
    async show(req, res) {
      const { id } = req.params;
      try {
        const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
        return res.status(200).json(umRegistro);
      } catch (erro) {
        // erro
      };
    };
  
    async create(req, res) {
      const dadosParaCriacao = req.body;
      try {
        const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
        return res.status(200).json(novoRegistroCriado);
      } catch (erro) {
        return res.status(500).send({message: erro.message})
      };
    };
  
    async update(req, res) {
      const { id } = req.params;
      const dadosAtualizados = req.body;
      try {
        //isUpdated
        const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
        if (!foiAtualizado) {
          return res.status(400).json({ mensagem: 'registro não foi atualizado' });
        }
        return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
      } catch (erro) {
        // erro
      };
    };
  
    async destroy(req, res) {
      const { id } = req.params;
      try {
        await this.entidadeService.excluiRegistro(Number(id));
        return res.status(200).json({ mensagem: `id ${id} deletado` });
      } catch (error) {
        return res.status(500).json(error.message);
      };
    };
  };
  
  module.exports = Controller;