import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./App.css";
import CreateNotes from "./components/CreateNotes";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { Note } from "./models/note.model";
function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "hi its a new meeting default",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Container>
        <Header />
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row className="mt-3 text-center text-muted">
          <Col>
            <h5>
              It ws Coded By Ahmed Barakat. For More Visit Me On GitHub
              <a
                className="mx-4"
                href="https://github.com/medobarakat"
                target={"_blank"}
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default App;
