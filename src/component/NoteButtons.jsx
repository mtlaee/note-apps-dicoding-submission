import React from "react";
import BtnDelete from "./DeleteButton";
import BtnArsip from "./ArsipButton";

function NoteButtons({ id, onDelete, moveData, text }) {
  return (
    <div className="notes_buttons">
      <BtnDelete id={id} onDelete={onDelete} />
      <BtnArsip text={text} moveData={moveData} id={id} />
    </div>
  );
}

export default NoteButtons;
