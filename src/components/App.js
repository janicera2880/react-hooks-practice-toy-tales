import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(data => setToys(() => data))
  }, [])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDelete(id) {
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "DELETE",
    })
    .then(setToys(toys.filter(toy => toy.id !== id)))
  }

  function handleLikes(id, likes) {
    const updatedLikes= { "likes": likes + 1 }
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(updatedLikes)
    })
    .then(res => res.json())
    .then(data => {
      const newToys= [...toys]
      newToys.forEach(toy => {
        if(toy.id === id) {
          toy.likes = likes + 1
        }
      })
      setToys(() => newToys)
    }
    )}

  return (
    <>
      <Header />
      {showForm ? <ToyForm setToys={setToys} toys={toys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDelete={handleDelete} handleLikes={handleLikes}/>
    </>
  );
}

export default App;
