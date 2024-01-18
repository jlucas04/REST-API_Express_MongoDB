import livro from "../models/Livro.js"

class LivroController {

    static async ListarLivros (req,res){
        try{
            const listaLivros = await livro.find({})
            res.status(200).json(listaLivros) 
        }catch (erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    }

    static async CadastrarLivro (req, res){
        try{
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: "Cadastro Criado com sucesso", livro:novoLivro})

        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`})
        }
    }
};

export default LivroController