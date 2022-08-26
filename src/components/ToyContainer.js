import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDelete, handleLikes}) {
  const displayToys= toys.map(toy => {
    return <ToyCard
    key={toy.id}
    toy={toy}
    handleDelete={handleDelete}
    handleLikes={handleLikes}
    />
    
  }) 
  return (
    <div id="toy-collection">{displayToys}</div>
   
  );
}

export default ToyContainer;
