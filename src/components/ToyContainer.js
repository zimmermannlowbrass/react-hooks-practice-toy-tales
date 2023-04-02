import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( { toys, onDeleteToy, onHandleLike }) {
  
  const toyCollection = toys.map(toy => {
    return (
      <ToyCard 
      key = {toy.id}
      toy = {toy}
      onDeleteToy = {onDeleteToy}
      onHandleLike = {onHandleLike}
      />
    )
  })

  return (
    <div id="toy-collection">{toyCollection}</div>
  );
}

export default ToyContainer;
