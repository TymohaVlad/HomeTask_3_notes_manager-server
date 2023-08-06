// src/services/notesService.ts
import { Note } from "../models/Note";

const notes: Note[] = [
  { id: 1, name: "Note 1", date: "2023-07-23", category: " Task", content: "Some Contetn here", archived: false },
  { id: 2, name: "Note 2", date: "2023-07-24", category: "Random thought", content: "Some Contetn here", archived: false },
  { id: 2, name: "Note 2", date: "2023-07-25", category: "Idea", content: "Some Contetn here", archived: false },
  { id: 2, name: "Note 2", date: "2023-07-26", category: "Idea", content: "Some Contetn here", archived: false },
  { id: 2, name: "Note 2", date: "2023-07-27", category: "Task", content: "Some Contetn here", archived: false },
  { id: 2, name: "Note 2", date: "2023-07-28", category: "Random thought", content: "Some Contetn here", archived: false },
  { id: 2, name: "Note 2", date: "2023-07-29", category: "Task", content: "CSome Contetn here", archived: false },
];

export const notesService = {
  createNote: (note: Note) => {
    const newNote = { ...note, id: notes.length + 1, archived: false };
    notes.push(newNote);
    return newNote;
  },
  removeNoteById: (id: number) => {
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      notes.splice(index, 1);
    }
  },
  updateNoteById: (id: number, updatedNote: Note) => {
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      notes[index] = { ...updatedNote, id };
      return notes[index];
    }
    return null;
  },
  getNoteById: (id: number) => notes.find((note) => note.id === id),
  getAllNotes: () => notes,
  getStatistics: () => {
    const archivedNotesCount = notes.filter((note) => note.archived).length;
    const activeNotesCount = notes.length - archivedNotesCount;
    return { archivedNotesCount, activeNotesCount };
  },
};
