import React, { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const letItems = people.filter((person) => person.id !== id);

    setPeople(letItems);
  };

  return (
    <div>
      <List people={people} removeFunction={removePerson} />
      <button className="clear" type="button" onClick={() => setPeople([])}>
        Clear All
      </button>
    </div>
  );
};

export default App;
