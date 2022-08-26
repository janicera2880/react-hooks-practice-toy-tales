import React, {useState} from "react";

function ToyForm({toys, setToys}) {
  const [formData, setFormData] = useState({
    "name":"",
    "image": "",
    "likes": 0
  })

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(data => setToys([...toys, data]))
    }
  
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit ={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value= {formData.name}
          onChange = {(e)=> setFormData({...formData, [e.target.name]: e.target.value})}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value= {formData.image}
          onChange = {(e)=> setFormData({...formData, [e.target.name]: e.target.value})}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
         
        />
      </form>
    </div>
  );
}

export default ToyForm;
