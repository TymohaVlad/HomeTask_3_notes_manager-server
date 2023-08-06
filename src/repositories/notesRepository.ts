import { Note } from "../models/Note";

let notes: Note[] = [
    { id: 1, name: "Note name 1", date: "2023-07-23", category: " Task", content: "Some Contetn here", archived: false },
    { id: 2, name: "Note name 2", date: "2023-07-24", category: "Random thought", content: "Some Contetn here 23/07/1992", archived: true },
    { id: 3, name: "Note name 3", date: "2023-07-25", category: "Idea", content: "Some Contetn here", archived: false },
    { id: 4, name: "Note name 4", date: "2023-07-26", category: "Idea", content: "Some Contetn here", archived: false },
    { id: 5, name: "Note name 5", date: "2023-07-27", category: "Task", content: "Some Contetn here 10/10/2013", archived: false },
    { id: 6, name: "Note name 6", date: "2023-07-28", category: "Random thought", content: "Some Contetn here", archived: false },
    { id: 7, name: "Note name 7", date: "2023-07-29", category: "Task", content: "CSome Contetn here", archived: false },
  ];

  class NotesRepository {
    getAllNotes() {
      return notes;
    }
  
    getNoteById(id: number) {
      return notes.find((note) => note.id === id);
    }
  
    createNote(note: Note) {
      notes.push(note);
    }
  
    updateNote(id: number, updatedNote: Note) {
      const index = notes.findIndex((note) => note.id === id);
      if (index !== -1) {
        notes[index] = { ...notes[index], ...updatedNote };
        return notes[index];
      }
      return null;
    }
  
    deleteNote(id: number) {
      notes = notes.filter((note) => note.id !== id);
    }
  }
  
  export const notesRepository = new NotesRepository();