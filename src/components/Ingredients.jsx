export default function Ingredients(props){

  const newIngredients = props.ingredientsArray.map(function(ingredient){
    return <li>{ingredient}</li>
  })

  return (
    <div className="ingredients">
        <h2>Added Ingredients Are:</h2>
        <ul>
          {newIngredients}
        </ul>
      </div>
  );
}