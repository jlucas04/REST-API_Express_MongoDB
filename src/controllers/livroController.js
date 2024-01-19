import livro from "../models/Livro.js"
import { autor } from "../models/Autores.js"

class LivroController {

    static async ListarLivros (req,res){
        try{
            const listaLivros = await livro.find({})
            res.status(200).json(listaLivros) 
        }catch (erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    }

    static async BuscarLivroPorId (req,res){
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id)
            res.status(200).json(livroEncontrado) 
        }catch (erro){
            res.status(500).json({message: `${erro.message} - falha na requisição do ID`})
        }
    }

    static async CadastrarLivro (req, res){
        const novolivro = req.body;
        try{
            const autorEncontrado = await autor.findById(novolivro.autor);
            const livroCompleto = { ...novolivro, autor: { ...autorEncontrado._doc }};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message: "Cadastro Criado com sucesso", livro:livroCriado})

        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`})
        }
    }

    static async AtualizarLivro (req,res){
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "livro atualizado"}) 
        }catch (erro){
            res.status(500).json({message: `${erro.message} - falha na atualização`})
        }
    }


    static async DeletaLivro (req,res){
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "livro Apagado"}) 
        }catch (erro){
            res.status(500).json({message: `${erro.message} - falha na exclusão`})
        }
    }
};

export default LivroController