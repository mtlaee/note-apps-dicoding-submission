import React from "react";

function ButtonArsip({ text, id, moveData }) {
  return (
    <button className="btn-arsip" onClick={() => moveData(id, text)}>
      {text}
    </button>
  );
}

export default ButtonArsip;
