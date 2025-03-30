import Showdown from 'showdown'
import ReactMarkdown from "react-markdown"

export default function ReactRecipe(props){
  const text = props.data;
  
  return (
    <div className='ai-text'>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
    
  )
}