import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { notesRouter } from "./controllers/notesController";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/notes", notesRouter);

export default app;
