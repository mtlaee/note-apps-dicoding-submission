import React from "react";
import ItemContainer from "./NoteItemContainers";
import EmptyMessage from "./Meesage";

function NoteList({ notes, moveData, onDelete, text }) {
  return (
    <div className="notes_list">
      {notes != "" ? (
        notes.map((item, index) => (
          <ItemContainer
            key={index}
            moveNote={moveData}
            onDelete={onDelete}
            text={text}
            {...item}
          />
        ))
      ) : (
        <EmptyMessage />
      )}
    </div>
  );
}

export default NoteList;
