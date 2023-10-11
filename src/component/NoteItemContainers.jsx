import React from "react";
import NoteButtons from "./NoteButtons";
import NoteItem from "./NoteItem";

function ItemContainers({
  title,
  moveData,
  createdAt,
  body,
  id,
  onDelete,
  text,
}) {
  return (
    <div className="notes-container">
      <NoteItem title={title} createdAt={createdAt} body={body} />
      <NoteButtons
        id={id}
        moveData={moveData}
        onDelete={onDelete}
        text={text}
      />
    </div>
  );
}

export default ItemContainers;
