import * as React from "react";
import { Note } from "../models/note.model";
import Notes from "./Notes";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FunctionComponent<INotesListProps> = ({
  notes,
  setNotes,
}) => {
  const rendernotes = () => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note} handledelete={handledelete} />;
    });
  };
  const handledelete = (id: string) => {
    setNotes(notes.filter((note) => note.id != id));
  };
  return (
    <div className="my-5">
      <h2 className="py-3">My Notes Is</h2>
      {rendernotes()}
    </div>
  );
};

export default NotesList;
