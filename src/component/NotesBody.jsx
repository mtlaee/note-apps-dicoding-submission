import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function NoteBody({ notes, arsip, moveData, onDelete, addNote }) {
  return (
    <div className="notes_body_apps">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NotesList
        notes={notes}
        moveNote={moveData}
        onDelete={onDelete}
        text="Arsipkan"
      />

      <h2>Arsip</h2>
      <NotesList
        notes={arsip}
        moveNote={moveData}
        onDelete={onDelete}
        text="Pindahkan"
      />
    </div>
  );
}

export default NoteBody;
