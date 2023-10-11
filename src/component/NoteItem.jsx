import React from "react";
import { showFormattedDate } from "../utils/data";

function NoteItem({ title, createdAt, body }) {
  return (
    <div className="notes_item">
      <h3 className="notes_item_title">{title}</h3>
      <p className="notes_item_date">{showFormattedDate(createdAt)}</p>
      <p className="notes_item_body">{body}</p>
    </div>
  );
}

export default NoteItem;
