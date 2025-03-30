import {useState} from 'react'
import ReactRecipe from './ReactRecipe'
import Ingredients from './Ingredients'
import AiData from './AiData'
import { generateRecipe } from "../../aiChef"

export default function Content(){

  const [ingredientsArray,setIngredientsArray] = useState([])

  function handleSubmit(event){
    event.preventDefault()
    const formEle = event.currentTarget
    const formData = new FormData(formEle)
    const ingredient1 = formData.get("ingredient")
    setIngredientsArray(prev => [...prev,ingredient1])
    console.log(ingredientsArray)
    formEle.reset()
  }
  

  const [recipeShown,setRecipeShown] = useState(false)
  const [recipeData, setRecipeData] = useState("");

  function generateText(){
    handleGenerateRecipe()
  }

  async function handleGenerateRecipe() {
    if (ingredientsArray.length > 0) {
      try {
        // const prompt = `Generate a recipe using ${ingredientsArray.join(", ")}`;
        const data = await generateRecipe(ingredientsArray);
        setRecipeData(data);
        setRecipeShown(true);
      } catch (error) {
        console.error("Error generating recipe:", error);
      }
    }
  }

  return (
    <div className="content">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="ingredient">Enter The Recipe</label>
        <input id="ingredient" type="text" placeholder="e g. tomatoes" name="ingredient"/>
        <button>Add Recipe</button>
      </form>

      { ingredientsArray.length > 0 && <Ingredients ingredientsArray={ingredientsArray} />}
 
      { ingredientsArray.length > 3 && <AiData toggleButton={generateText} /> }
      
      {recipeShown && <ReactRecipe data={recipeData} />}

    </div>
  );

}