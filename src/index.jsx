import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import NoteApps from "./component/NoteApps";

const root = createRoot(document.getElementById("root"));
root.render(<NoteApps />);
