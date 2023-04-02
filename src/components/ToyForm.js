import React, { useState } from "react";

function ToyForm( { onAddToy }) {

  const [formData, setFormData] = useState( {
    name: "",
    image: ""
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name ]: e.target.value
    })
  }

  console.log(formData)

  function handleSubmit(e) {
    e.preventDefault()
    onAddToy(formData)
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit = {handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          onChange={handleChange}
          placeholder="Enter a toy's image URL..."
          className="input-text"
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
