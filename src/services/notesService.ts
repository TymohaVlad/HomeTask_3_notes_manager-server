import { Note } from "../models/Note";
import { notesRepository } from "../repositories/notesRepository";
import { validateNote } from "../utils/validation";

export const notesService = {
  createNote: (note: Note) => {
    if (!validateNote(note)) {
      throw new Error("Invalid note format");
    }

    const newNote = { ...note, id: notesRepository.getAllNotes().length + 1, archived: false };
    notesRepository.createNote(newNote);
    return newNote;
  },
  removeNoteById: (id: number) => {
    notesRepository.deleteNote(id);
  },
  updateNoteById: (id: number, updatedNote: Note) => {
    if (!validateNote(updatedNote)) {
      throw new Error("Invalid note format");
    }

    const updatedNoteObject = notesRepository.updateNote(id, updatedNote);
    if (!updatedNoteObject) {
      throw new Error("Note not found");
    }
    return updatedNoteObject;
  },
  getNoteById: (id: number) => {
    const note = notesRepository.getNoteById(id);
    if (!note) {
      throw new Error("Note not found");
    }
    return note;
  },
  getAllNotes: () => notesRepository.getAllNotes(),
  getStatistics: () => {
    const allNotes = notesRepository.getAllNotes();
    const statistics: { [category: string]: { archived: number; active: number } } = {};
    
    allNotes.forEach((note) => {
      const category = note.category;
      if (category) {
        if (!statistics[category]) {
          statistics[category] = { archived: 0, active: 0 };
        }

        if (note.archived) {
          statistics[category].archived++;
        } else {
          statistics[category].active++;
        }
      }
    });

    return statistics;
  },
};
