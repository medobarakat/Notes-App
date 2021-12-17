import * as React from "react";
import { Button, Card } from "react-bootstrap";
import { Note } from "../models/note.model";

interface INotesProps {
  note: Note;
  handledelete: (id: string) => void;
}

const Notes: React.FunctionComponent<INotesProps> = ({
  note,
  handledelete,
}) => {
  return (
    <>
      <Card style={{ backgroundColor: note.color, width: "38rem" }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
        </Card.Body>
      </Card>
      <Button
        onClick={() => handledelete(note.id)}
        className="mt-3"
        variant="danger"
      >
        Delete Note
      </Button>
    </>
  );
};

export default Notes;
