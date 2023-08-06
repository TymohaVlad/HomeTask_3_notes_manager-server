import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { notesRouter } from "./routes/notesRoutes";
import { log } from "console";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/notes", notesRouter);
app.listen(5000, () =>{
    log('Server is started')
})
export default app;
