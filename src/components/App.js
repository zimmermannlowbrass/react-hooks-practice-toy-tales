import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch(`http://localhost:3001/toys`)
    .then(r => r.json())
    .then(data => setToys(data))
  }, [])

  function handleAddingNewToy(newToy) {
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newToy)
    })
    .then(r => r.json())
    .then(newToy => {
      setToys([...toys, newToy])
    })
  }

  function handleDeleteToy(deletedToy) {
    const updatedToys = toys.filter(toy => toy.id !== deletedToy.id)
    setToys(updatedToys)
  }

  function handleAddingLike(updatedToy) {
    console.log(updatedToy)
    const updatedToys = toys.map(toy => {
      if (toy.id === updatedToy.id) {
        return updatedToy
      } else {
        return toy
      }
    })
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddingNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
      toys = {toys}
      onDeleteToy = {handleDeleteToy}
      onHandleLike = {handleAddingLike}
      />
    </>
  );
}

export default App;
