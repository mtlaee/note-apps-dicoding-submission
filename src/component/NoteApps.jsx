import React from "react";
import NoteHeader from "./noteHeader";
import NotesBody from "./NotesBody";
import { notesData } from "../utils/data";

class NoteApps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: notesData(),
    };

    this.onAddNotesEventHandler = this.onAddNotesEventHandler.bind(this);
    this.onMoveDataEventHandler = this.onMoveDataEventHandler.bind(this);
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
  }

  onAddNotesEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: +new Date(),
          },
        ],
      };
    });
  }

  onMoveDataEventHandler(id, text) {
    if (text == "Arsipkan") {
      this.setState((prevState) => {
        return {
          notes: prevState.notes.map((note) =>
            note.id === id ? { ...note, archived: true } : note
          ),
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          notes: prevState.notes.map((note) =>
            note.id == id ? { ...note, archived: false } : note
          ),
        };
      });
    }
  }

  onDeleteEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({
      notes: notes,
    });
  }

  render() {
    return (
      <div className="note-Apss">
        <NoteHeader />
        <NotesBody
          notes={this.state.notes.filter((note) => note.archived == false)}
          arsip={this.state.notes.filter((note) => note.archived == true)}
          moveData={this.onMoveDataEventHandler}
          onDelete={this.onDeleteEventHandler}
          addNote={this.onAddNotesEventHandler}
        />
      </div>
    );
  }
}

export default NoteApps;
