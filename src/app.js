import express from "express";
import conectaNaDataBase from "./config/dbConnection.js"
import livro from "./models/Livro.js";

const conection = await conectaNaDataBase();
conection.on("error", (erro)=>{
    console.error("erro de conexão", erro);
})
conection.once("open", ()=> {
    console.log("Conexão realizada com sucesso!")
})


const app = express();

app.get("/", (req, res)=>{
    res.status(200).send("Curso de Node.js");
})



export default app;