import React from "react";

function ToyCard( {toy, handleDelete, handleLikes} ) {
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={() => handleLikes(toy.id, toy.likes)}>Like {"<3"}</button>
      <button className="del-btn" onClick= {() => handleDelete(toy.id)} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
