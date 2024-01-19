import express  from "express";
import LivroController from "../controllers/livroController.js";


const route = express.Router();

route.get("/livros", LivroController.ListarLivros);
route.post("/livros", LivroController.CadastrarLivro)
route.get("/livros/:id", LivroController.BuscarLivroPorId)
route.put("/livros/:id", LivroController.AtualizarLivro)
route.delete("/livro/:id", LivroController.DeletaLivro)


export default route