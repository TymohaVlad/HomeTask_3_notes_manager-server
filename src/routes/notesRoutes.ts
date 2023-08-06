const express = require('express');
const notesController = require('../controllers/notesController');

const notesRouter = express.Router();

notesRouter.get('/:id', notesController.getNoteById);

notesRouter.get('/', notesController.getAllNotes);

notesRouter.post('/', notesController.createNote);

notesRouter.patch('/:id', notesController.updateNote);

notesRouter.delete('/:id', notesController.deleteNote);

module.exports = notesRouter;
