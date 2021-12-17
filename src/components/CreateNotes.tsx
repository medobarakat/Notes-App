import * as React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useRef, useState } from "react";
import { Note } from "../models/note.model";

interface ICreateNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({
  notes,
  setNotes,
}) => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState(false);
  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      setError(true);
    } else if (
      titleRef.current?.value !== "" &&
      textRef.current?.value !== ""
    ) {
      setNotes([
        ...notes,
        {
          id: new Date().toString(),
          title: (titleRef.current as HTMLInputElement).value,
          text: (textRef.current as HTMLTextAreaElement).value,
          color: (colorRef.current as HTMLInputElement).value,
          date: new Date().toString(),
        },
      ]);
    }
  };

  return (
    <>
      {error && (
        <Alert style={{ width: "38rem" }}>
          There are an error , Fill all of the fields please
        </Alert>
      )}
      <Form onSubmit={(e) => handlesubmit(e)} style={{ width: "38rem" }}>
        <Form.Group className="my-3">
          <Form.Label>Enter The Title</Form.Label>
          <Form.Control
            ref={titleRef}
            placeholder="Enter The Title Please"
            type="text"
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Enter The Text</Form.Label>
          <Form.Control
            ref={textRef}
            placeholder="Enter The Title Please"
            type="text"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label htmlFor="colorInput">Enter The Color</Form.Label>
          <Form.Control
            ref={colorRef}
            type="color"
            id="colorInput"
            title="enter the color"
            defaultValue={"#dfdfdf"}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
