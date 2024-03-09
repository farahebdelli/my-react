import React from "react";
import "./style.css"; // Importer le fichier CSS externe
import farahImage from "./react/farah.jpg";

function App() {
  return (
    <div className="container">
      <h1 className="title red">Voila</h1>
      <br />
      <img
        src={process.env.PUBLIC_URL + "/asset/img.jpg"}
        alt="Image in Public"
      />
      <br />
      <img src={farahImage} alt="Image in src" />
    </div>
  );
}

export default App;
