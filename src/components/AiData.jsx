export default function AiData(props){
  return (
    <div className="explore">
        <p>Ask the chef to make a Recipe</p>
        <button onClick={props.toggleButton}>React Chef</button>
    </div>
  );
}