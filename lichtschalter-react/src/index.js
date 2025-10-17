import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { useState } from "react";
import reportWebVitals from "./reportWebVitals";

function Lichtschalter() {
  const [lichtAn, setLichtAn] = useState(false);

  return (
    <div>
      <p style={{ backgroundColor: lichtAn ? "yellow" : "white" }}>
        {lichtAn ? "Das licht ist an" : "Das licht ist aus"}
      </p>
      <button onClick={() => setLichtAn(!lichtAn)}>{lichtAn ? "Licht an" : "Licht aus"}</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Lichtschalter></Lichtschalter>
  </React.StrictMode>
);

reportWebVitals();
