import React from "react";
import "./App.css";
import Posts from "./Components/Posts";
import Users from "./Components/Users";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Users />
        <Posts />
      </header>
    </div>
  );
}

export default App;
