import express  from "express";
import AutorController from "../controllers/autoresController.js";


const route = express.Router();

route.get("/autores", AutorController.ListarAutores);
route.post("/autores", AutorController.CadastrarAutores)
route.get("/autores/:id", AutorController.BuscarAutorPorId)
route.put("/autores/:id", AutorController.AtualizarAutor)
route.delete("/autores/:id", AutorController.DeletaAutor)


export default route