import React from "react";
import "./App.css";
import NasaCard from "./components/NasaCard";

function App() {
  return (
    <div className="App">
      <h1>NASA Photo of the Day!</h1>
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
        
        <NasaCard />
      </p>
    </div>
  );
}

export default App;
