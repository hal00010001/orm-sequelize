const { Router } = require('express')
const PessoaControler = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas/todos', PessoaControler.pegaTodasAsPessoas)
router.get('/pessoas', PessoaControler.pegaPessoasAtivas)
router.get('/pessoas/:id', PessoaControler.pegaUmaPessoa)
router.post('/pessoas', PessoaControler.criaPessoa)
router.put('/pessoas/:id', PessoaControler.atualizaPessoa)
router.delete('/pessoas/:id', PessoaControler.deletaPessoa)
router.post('/pessoas/:id/restaura', PessoaControler.restauraPessoa)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaControler.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaControler.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaControler.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaControler.apagaMatricula)
router.get('/pessoas/:estudanteId/matricula', PessoaControler.pegaMatriculas)
router.get('/pessoas/matricula/:turmaId/confirmadas', PessoaControler.pegaMatriculasPorTurma)
router.get('/pessoas/matricula/contagem', PessoaControler.pegaTurmasContagem)
router.get('/pessoas/matricula/lotada', PessoaControler.pegaTurmasLotadas)
router.post('/pessoas/:estudanteId/cancela', PessoaControler.cancelaPessoa)

module.exports = router