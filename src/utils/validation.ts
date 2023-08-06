import * as yup from "yup";
import { Note } from "../models/Note";

export const noteSchema = yup.object().shape({
  name: yup.string().required(),
  date: yup.string().required(),
  category: yup.string().required(),
  content: yup.string().required(),
  archived: yup.boolean().required(),
});

export const validateNote = (note: Note): boolean => {
  try {
    noteSchema.validateSync(note);
    return true;
  } catch (error) {
    return false;
  }
};
