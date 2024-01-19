import { autor } from "../models/Autores.js";

class AutorController {

    static async ListarAutores (req,res){
        try{
            const listaAutores = await autor.find({})
            res.status(200).json(listaAutores) 
        }catch (erro){
            res.status(500).json({message: `${erro.message} - Falha na requisição`})
        }
    }

    static async BuscarAutorPorId (req,res){
        try{
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id)
            res.status(200).json(autorEncontrado) 
        }catch (erro){
            res.status(500).json({message: `${erro.message} - falha na requisição do ID`})
        }
    }

    static async CadastrarAutores (req, res){
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: "Cadastro Criado com sucesso", autor:novoAutor})

        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`})
        }
    }

    static async AtualizarAutor (req,res){
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Autor foi atualizado"}) 
        }catch (erro){
            res.status(500).json({message: `${erro.message} - falha na atualização`})
        }
    }


    static async DeletaAutor (req,res){
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Autor Deletado com Sucesso"}) 
        }catch (erro){
            res.status(500).json({message: `${erro.message} - falha na exclusão`})
        }
    }
};

export default AutorController