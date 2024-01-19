import express from "express";
import conectaNaDataBase from "./config/dbConnection.js"
import routes from "./routes/index.js";

const conection = await conectaNaDataBase();
conection.on("error", (erro)=>{
    console.error("erro de conexão", erro);
})
conection.once("open", ()=> {
    console.log("Conexão realizada com sucesso!")
})

const app = express();
routes(app)


export default app;