import express from "express";
import { notesService } from "../services/notesService";
import { validateNote } from "../utils/validation";
import { Note } from "../models/Note";

export const notesRouter = express.Router();

notesRouter.post("/", (req, res) => {
  const note = req.body as Note;
  if (!validateNote(note)) {
    return res.status(400).json({ error: "Invalid note format" });
  }

  const createdNote = notesService.createNote(note);
  return res.status(201).json(createdNote);
});

notesRouter.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  notesService.removeNoteById(id);
  return  res.status(200).json({ message: "Note has been successfully deleted" });
});

notesRouter.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedNote = req.body as Note;
  if (!validateNote(updatedNote)) {
    return res.status(400).json({ error: "Invalid note format" });
  }

  const note = notesService.updateNoteById(id, updatedNote);
  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }

  return res.status(200).json(note);
});

notesRouter.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const note = notesService.getNoteById(id);
  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }

  return res.status(200).json(note);
});

notesRouter.get("/", (req, res) => {
  const notes = notesService.getAllNotes();
  return res.status(200).json(notes);
});

notesRouter.get("/stats", (req, res) => {
  const stats = notesService.getStatistics();
  return res.status(200).json(stats);
});

